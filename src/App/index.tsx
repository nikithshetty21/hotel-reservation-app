import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import { AppContext } from "../Context";
import { ReservationData } from "../Resources";
import { Reservation } from "../Interface";

const App = () => {
  const [searchCriteria, setSearchCriteria] = useState<string>("");
  const [searchString, setSearchString] = useState<string>("");
  const [reservationData, setReservationData] = useState<any>([]); //TODO: change typr to Reservation[]
  const appState = {
    reservationData,
    setReservationData,
    searchCriteria,
    setSearchCriteria,
    searchString,
    setSearchString,
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
