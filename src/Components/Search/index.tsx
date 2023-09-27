import React, { useContext, useEffect, useState } from "react";
import Criteria from "./Criteria";
import Grid from "@mui/material/Grid";
import SearchBox from "./SearchBox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Details from "../Details";
import { AppContext } from "../../Context";
import ResultTable from "./ResultTable";
import { AppState, Reservation } from "../../Interface";

const Search = () => {
  const appState: AppState = useContext<AppState>(AppContext);
  const [noResultText, setNoResultText] = useState("");

  const [searchResult, setSearchResult] = useState<Reservation[] | []>([]);
  const [selectedResult, setSelectedResult] = useState<Reservation | null>(
    {} as any
  );
  const { open, handleOpen } = appState;

  useEffect(() => {
    if (!open) handleSearch(null);
  }, [open]);

  const handleSearch = (event: any) => {
    console.log(' i came here');
    const { searchString, searchCriteria, reservationData } = appState;
    let result = [];
    if (reservationData && Array.isArray(reservationData)) {
      result = reservationData.filter(
        (data: any) => data[searchCriteria] === searchString
      );
      console.log('my result', searchString, searchCriteria);
      setSearchResult(result);
      if (result && result.length === 0 && event) {
        setNoResultText("No Result for the entered input");
      } else {
        setNoResultText("");
      }
    }
  };

  const handleAddition = () => {
    setSelectedResult(null);
    handleOpen();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
        rowSpacing={1}
        columnSpacing={1}
      >
        <Grid item xs={12} textAlign="center">
          <Button
            role="addnewbutton"
            onClick={handleAddition}
            variant="contained"
          >
            Add New Reservation
          </Button>
        </Grid>
        <Grid item xs={4} textAlign="right">
          <Criteria />
        </Grid>
        <Grid item xs={4} textAlign="left">
          <SearchBox />
        </Grid>
        <Grid item xs={4} textAlign="left">
          <Button
            role="searchbutton"
            data-testid="searchbutton"
            disabled={!appState.searchString}
            onClick={handleSearch}
            variant="contained"
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={8} textAlign="center">
          {searchResult && searchResult.length ? (
            <ResultTable
              searchResults={searchResult}
              setSelectedResult={setSelectedResult}
            />
          ) : (
            <>{noResultText}</>
          )}
        </Grid>
        {open && <Details modalOpen={open} data={selectedResult} />}
      </Grid>
    </Box>
  );
};

export default Search;
