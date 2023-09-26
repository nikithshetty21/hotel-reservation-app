export interface HandleEventInterface {
    target: HTMLInputElement;
  }

  export interface Stay {
    arrivalDate: any,
    departureDate: any
  }

  export interface Room {
    roomSize: string,
    roomQuantity: number
  }

  export interface AddressStreet {
    streetName: string,
		streetNumber: string,
  }

  export interface addressLocation {
    zipCode: string,
    state: string,
    city: string,
  }


  export interface Reservation {
    stay: Stay,
	  room: Room,
	  firstName: string,
	  lastName: string,
	  email: string,
	  phone: string,
	  addressStreet: {
		streetName: string,
		streetNumber: string,
	  },
	  addressLocation: {
		zipCode: string,
		state: string,
		city: string,
	  },
	  extras: string[],
	  payment: string,
	  note: string,
	  tags: string[],
	  reminder: boolean,
	  newsletter: boolean,
	  confirm: boolean
	}
  
  