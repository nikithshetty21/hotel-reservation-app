import React, {
  useContext,
  useEffect,
  useState
} from "react";
import Grid from "@mui/material/Grid";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SelectBox from "../../../Containers/SelectBox";
import { Extras, SuiteOptions } from "../../../Constants";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { AppContext } from "../../../Context";
import {
  AppState,
  HandleEventInterface,
  Reservation,
} from "../../../Interface";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Autocomplete, Chip } from "@mui/material";

interface DefaultProps {
  data: Reservation | null;
}

const Reservations = (props: DefaultProps) => {
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [deleteState, setDeleteState] = useState(true);
  const { data } = props;
  const { reservationData, setReservationData, handleClose } =
    useContext<AppState>(AppContext);
  const [dataIndex, setDataIndex] = useState(0);
  const buttonText = data ? "UPDATE" : "ADD";

  useEffect(() => {
    if (data !== null) {
      setReservationState(data);
      setDeleteState(true);
    } else {
      setDeleteState(false);
    }
    const indexOfData: number = reservationData.indexOf(data as any);
    setDataIndex(indexOfData);
  }, []);

  const handleAlertClose = () => {
    setAlert(false);
    handleClose();
  };

  const [reservationState, setReservationState] = useState<any>({
    stay: {
      arrivalDate: dayjs("2022-04-17"),
      departureDate: dayjs("2022-04-17"),
    },
    room: {
      roomSize: "",
      roomQuantity: 0,
    },
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressStreet: {
      streetName: "",
      streetNumber: "",
    },
    addressLocation: {
      zipCode: "",
      state: "",
      city: "",
    },
    extras: [],
    payment: "",
    note: "",
    tags: [],
    reminder: false,
    newsletter: false,
    confirm: false,
  });

  useEffect(() => {
    validateReservation();
  }, [reservationState]);

  const handleChipsChange = (newChips: any) => {
    setReservationState((prevState: any) => ({
      ...prevState,
      tags: newChips,
    }));
  };

  const handleInputChange = (event: any) => {
    setReservationState((prevState: any) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateChange = (date: Dayjs, dateText: string) => {
    setReservationState((prevState: any) => ({
      ...prevState,
      stay: {
        ...prevState.stay,
        [dateText]: date,
      },
    }));
  };

  const handleRoomQuantityChange = (event: any) => {
    setReservationState((prevState: any) => ({
      ...prevState,
      room: {
        ...prevState.room,
        roomQuantity: event.target.value,
      },
    }));
  };

  const handleRoomSizeChange = (event: HandleEventInterface) => {
    setReservationState((prevState: any) => ({
      ...prevState,
      room: {
        ...prevState.room,
        roomSize: event.target.value,
      },
    }));
  };

  const handleExtrasChange = (event: HandleEventInterface) => {
    setReservationState((prevState: any) => ({
      ...prevState,
      extras: event.target.value,
    }));
  };

  const handleAddressStreetChange = (event: any) => {
    setReservationState((prevState: any) => ({
      ...prevState,
      addressStreet: {
        ...prevState.addressStreet,
        [event.target.name]: event.target.value,
      },
    }));
  };
  const handleAddressLocChange = (event: any) => {
    setReservationState((prevState: any) => ({
      ...prevState,
      addressLocation: {
        ...prevState.addressLocation,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const handleSwitchChange = (event: any) => {
    console.log("event values", event.target.checked, event.target.name);
    setReservationState((prevState: any) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };

  const handleUpdate = () => {
    if (data) {
      const tempData: Reservation[] = reservationData;
      reservationData[dataIndex] = reservationState;
      setReservationData(tempData);
      setAlertText("Updated");
    } else {
      const tempData = [...reservationData, reservationState];
      setDeleteState(true);
      setReservationData(tempData);
      setAlertText("Added");
    }
    setAlert(true);
  };

  const handleDelete = () => {
    if (data) {
      const tempData = reservationData;
      tempData.splice(dataIndex, 1);
      setReservationData(tempData);
    } else {
      const tempData = reservationData;
      tempData.pop();
      setReservationData(tempData);
    }
    setAlert(true);
    setAlertText("Deleted");
  };

  const getEmailHelperText = () => {
    const emailValue = reservationState.email;
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!reservationState.email) return "Email is Required";
    if (!String(emailValue).toLowerCase().match(validRegex))
      return "Enter valid email";
    return undefined;
  };

  const getPhoneHelperText = () => {
    const phoneNumber = reservationState.phone;
    const validRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!reservationState.phone) return "Phone Number is Required";
    if (!phoneNumber.match(validRegex)) return "Enter valid Phone Number";
    return undefined;
  };

  const validateReservation = () => {
    const { firstName, lastName, email, phone } = reservationState;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !!getEmailHelperText() ||
      !!getPhoneHelperText()
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <FormGroup>
      <Grid
        container
        spacing={3}
        direction="row"
        rowSpacing={1}
        columnSpacing={2}
      >
        <Grid item xs={3} textAlign="left">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Arrival"
              data-testid='date-test'
              value={dayjs(reservationState.stay.arrivalDate)}
              onChange={(newValue: any) =>
                handleDateChange(newValue, "arrivalDate")
              }
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={9} textAlign="left">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Departure"
              value={dayjs(reservationState.stay.departureDate)}
              onChange={(newValue: any) =>
                handleDateChange(newValue, "departureDate")
              }
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={3} textAlign="left">
          <SelectBox
            id="room-size"
            label="Room Size"
            handleChange={handleRoomSizeChange}
            options={SuiteOptions}
            multiple={false}
            value={reservationState.room.roomSize}
            data-testid="room-size"
          ></SelectBox>
        </Grid>
        <Grid item xs={9} textAlign="left">
          <TextField
            id="room-quantity"
            label="Room Quantity"
            variant="standard"
            data-testid="room-quantity"
            value={reservationState.room.roomQuantity}
            onChange={handleRoomQuantityChange}
          />
        </Grid>
        <Grid item xs={12} textAlign="left">
          <TextField
            required
            error={!reservationState.firstName}
            helperText={!reservationState.firstName && "First Name is Required"}
            id="first-name"
            label="First Name"
            variant="standard"
            name="firstName"
            data-testid="first-name"
            value={reservationState.firstName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} textAlign="left">
          <TextField
            required
            error={!reservationState.lastName}
            helperText={!reservationState.lastName && "Last Name is Required"}
            id="last-name"
            label="Last Name"
            name="lastName"
            value={reservationState.lastName}
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} textAlign="left">
          <TextField
            required
            error={!!getEmailHelperText()}
            helperText={getEmailHelperText()}
            id="e-mail"
            label="E-Mail"
            name="email"
            value={reservationState.email}
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} textAlign="left">
          <TextField
            id="phone-number"
            required
            error={!!getPhoneHelperText()}
            helperText={getPhoneHelperText()}
            label="Phone Number"
            variant="standard"
            name="phone"
            value={reservationState.phone}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3} textAlign="left">
          <TextField
            id="street-name"
            label="Street Name"
            name="streetName"
            value={reservationState.addressStreet.streetName}
            variant="standard"
            data-testid="street-name"
            onChange={handleAddressStreetChange}
          />
        </Grid>
        <Grid item xs={9} textAlign="left">
          <TextField
            id="street-number"
            label="Street Number"
            variant="standard"
            name="streetNumber"
            value={reservationState.addressStreet.streetNumber}
            onChange={handleAddressStreetChange}
          />
        </Grid>

        <Grid item xs={3} textAlign="left">
          <TextField
            id="zip"
            label="Zip"
            name="zipCode"
            data-testid="zip"
            onChange={handleAddressLocChange}
            value={reservationState.addressLocation.zipCode}
            variant="standard"
          />
        </Grid>
        <Grid item xs={3} textAlign="left">
          <TextField
            id="state"
            label="State"
            name="state"
            onChange={handleAddressLocChange}
            value={reservationState.addressLocation.state}
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} textAlign="left">
          <TextField
            id="city"
            label="City"
            name="city"
            onChange={handleAddressLocChange}
            value={reservationState.addressLocation.city}
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} textAlign="left">
          <SelectBox
            id="extra-utility"
            label="Extras"
            data-testid="extras"
            handleChange={handleExtrasChange}
            options={Extras}
            multiple={true}
            value={reservationState.extras}
          ></SelectBox>
        </Grid>

        <Grid item xs={12} textAlign="left">
          <FormControl>
            <FormLabel id="payment-radio-buttons-group-label">
              Payment
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="payment-radio-buttons-group-label"
              value={reservationState.payment}
              name="payment"
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="cc"
                control={<Radio />}
                label="Credit Card"
              />
              <FormControlLabel
                value="payPal"
                control={<Radio />}
                label="PayPal"
              />
              <FormControlLabel value="cash" control={<Radio />} label="Cash" />
              <FormControlLabel
                value="bitCoin"
                control={<Radio />}
                label="Bitcoin"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} textAlign="left">
          <TextField
            id="personal-note"
            label="Personal Note"
            variant="standard"
            name="note"
            onChange={handleInputChange}
            value={reservationState.note}
          />
        </Grid>

        <Grid item xs={12} textAlign="left">
          <Autocomplete
            clearIcon={false}
            options={[]}
            value={reservationState.tags}
            freeSolo
            multiple
            data-testid="chips"
            onChange={(event, value) => handleChipsChange(value)}
            renderTags={(value: any, props: any) => {
              return value.map((option: any, index: number) => (
                <Chip label={option} {...props({ index })} />
              ));
            }}
            renderInput={(params: any) => (
              <TextField label="Tags" {...params} />
            )}
          />
        </Grid>

        <Grid item xs={12} textAlign="left">
          <FormControlLabel
            control={
              <Switch
                checked={reservationState.reminder}
                onChange={handleSwitchChange}
                value={reservationState.reminder}
                name="reminder"
                data-testid="reminder"
              />
            }
            label="Send me a Reminder"
            labelPlacement="end"
          />
        </Grid>

        <Grid item xs={12} textAlign="left">
          <FormControlLabel
            control={
              <Switch
                checked={reservationState.newsletter}
                onChange={handleSwitchChange}
                value={reservationState.newsletter}
                name="newsletter"
              />
            }
            label="Subscribe to newsletter"
            labelPlacement="end"
          />
        </Grid>

        <Grid item xs={12} textAlign="left">
          <FormControlLabel
            control={<Checkbox />}
            label="I confirm the information given above"
            name="confirm"
            data-testid="confirm"
            value={reservationState.confirm}
            onChange={handleSwitchChange}
          />
        </Grid>

        <Grid item xs={2} textAlign="left">
          <Button
            onClick={handleUpdate}
            data-testid="update-button"
            variant="contained"
            disabled={error}
          >
            {buttonText}
          </Button>
        </Grid>
        <Grid item xs={2} textAlign="left">
          {deleteState && (
            <Button
              onClick={handleDelete}
              data-testid="delete-button"
              variant="contained"
              disabled={error}
            >
              DELETE
            </Button>
          )}
          {alert && (
            <Alert
              alert={alert}
              handleAlertClose={handleAlertClose}
              action={alertText}
              data-testid="alert-window"
            />
          )}
        </Grid>
      </Grid>
    </FormGroup>
  );
};

const Alert = (props: any) => {
  return (
    <Dialog
      open={props.alert}
      onClose={props.handleAlertClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`Record successfully ${props.action}`}
      </DialogTitle>
      <DialogActions>
        <Button autoFocus onClick={props.handleAlertClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Reservations;
