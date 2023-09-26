import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../../Context";
import { Tooltip } from "@mui/material";

const SearchBox = () => {
  const [error, setError] = useState(false);

  const appState = useContext(AppContext);
  const { searchCriteria, searchString, setSearchString } = appState;

  useEffect(() => {
    if (!searchCriteria) setError(true);
    else setError(false);
  }, [searchCriteria]);

  

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value)
  }

  const getTooltipTitle= () => {
    if(error) return 'Select Search Criteria'
  }
  return (
    <Tooltip title={getTooltipTitle()} placement="bottom">
    <TextField
    disabled={error}
    error={error}
      fullWidth
      id="outlined-basic"
      label="Search..."
      variant="outlined"
      onChange={onSearchInput}
    />
    </Tooltip>
  );
};

export default SearchBox;
