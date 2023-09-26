import React, { useContext, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import SelectBox from "../../../Containers/SelectBox";
import { CriteriaOptions } from "../../../Constants";
import { HandleEventInterface } from "../../../Interface";
import { AppContext } from "../../../Context";

const Criteria = () => {
  const appState = useContext(AppContext);
  const { searchCriteria, setSearchCriteria } = appState;

  const handleChange = (event: HandleEventInterface) => {
    setSearchCriteria(event.target.value);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <SelectBox
          id="search-criteria"
          label="Search Criteria"
          handleChange={handleChange}
          options={CriteriaOptions}
          multiple={false}
          value={searchCriteria}
          data-testid="select-criteria"
        />
      </Box>
    </>
  );
};

export default Criteria;
