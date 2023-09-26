import { Dayjs } from "dayjs";
import {  Dispatch, SetStateAction } from "react";

export interface HandleEventInterface {
  target: HTMLInputElement;
}

export interface AppState {
	reservationData: Reservation[];
	setReservationData: Dispatch<SetStateAction<Reservation[]>>;
	searchCriteria: string;
	setSearchCriteria: Dispatch<SetStateAction<string>>;
	searchString: string;
	setSearchString: Dispatch<SetStateAction<string>>;
	open: boolean, 
    setOpen: Dispatch<SetStateAction<boolean>>;
    handleOpen: () => void,
    handleClose: () => void
  }
  

export interface Stay {
  arrivalDate: Dayjs;
  departureDate: Dayjs;
}

export interface Room {
  roomSize: string;
  roomQuantity: number;
}

export interface AddressStreet {
  streetName: string;
  streetNumber: string;
}

export interface addressLocation {
  zipCode: string;
  state: string;
  city: string;
}

export interface Reservation {
  stay: Stay;
  room: Room;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressStreet: {
    streetName: string;
    streetNumber: string;
  };
  addressLocation: {
    zipCode: string;
    state: string;
    city: string;
  };
  extras: string[];
  payment: string;
  note: string;
  tags: string[];
  reminder: boolean;
  newsletter: boolean;
  confirm: boolean;
}
