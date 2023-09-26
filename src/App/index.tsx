import React, { useEffect, useState} from "react";
import Search from "../Components/Search";
import { AppContext } from "../Context";
import { ReservationData } from "../Resources";
import { AppState, Reservation } from "../Interface";


const App = () => {
  const [searchCriteria, setSearchCriteria] = useState<string>("");
  const [searchString, setSearchString] = useState<string>("");
  const [reservationData, setReservationData] = useState<any>([]);
  const [open, setOpen] = useState(false);  
  const handleOpen = () => setOpen(true);
    const handleClose = () =>  {
      setOpen(false);
    }


  const appState: AppState = {
    reservationData,
    setReservationData,
    searchCriteria,
    setSearchCriteria,
    searchString,
    setSearchString,
    open, 
    setOpen,
    handleOpen,
    handleClose
  };
  useEffect(() => {
    setReservationData(ReservationData);
  }, []);
  return (
    <>
      <AppContext.Provider value={appState}>
        <Search />
      </AppContext.Provider>
    </>
  );
};

export default App;
