import dayjs from "dayjs";

export const ReservationData = [
	{
	  "stay": {
		"arrivalDate": dayjs("2021-11-18T05:00:00.000Z"),
		"departureDate": dayjs("2021-11-25T05:00:00.000Z")
	  },
	  "room": {
		"roomSize": "business-suite",
		"roomQuantity": 3
	  },
	  "firstName": "IDM",
	  "lastName": "ENG",
	  "email": "idm.test@idm.com",
	  "phone": "9999999999",
	  "addressStreet": {
		"streetName": "IDM Street",
		"streetNumber": "1234"
	  },
	  "addressLocation": {
		"zipCode": "123456",
		"state": "Arizona",
		"city": "OAKVILLE"
	  },
	  "extras": [
		"extraBreakfast",
		"extraTV",
		"extraWiFi",
		"extraParking",
		"extraBalcony"
	  ],
	  "payment": "cc",
	  "note": "idm lab test",
	  "tags": [
		"hotel",
		"booking",
		"labtest"
	  ],
	  "reminder": true,
	  "newsletter": true,
	  "confirm": false
	},
	{
	  "stay": {
		"arrivalDate": dayjs("2021-11-01T04:00:00.000Z"),
		"departureDate": dayjs("2021-11-04T04:00:00.000Z")
	  },
	  "room": {
		"roomSize": "presidential-suite",
		"roomQuantity": 2
	  },
	  "firstName": "IDM",
	  "lastName": "PM",
	  "email": "idm.op@idm.com",
	  "phone": "1234567890",
	  "addressStreet": {
		"streetName": "IDM",
		"streetNumber": "1234"
	  },
	  "addressLocation": {
		"zipCode": "123456",
		"state": "Arkansas",
		"city": "OAK"
	  },
	  "extras": [
		"extraParking",
		"extraBalcony"
	  ],
	  "payment": "cash",
	  "note": "lab test",
	  "tags": [
		"angular",
		"material",
		"labtest"
	  ],
	  "reminder": true,
	  "newsletter": false,
	  "confirm": true
	}
]