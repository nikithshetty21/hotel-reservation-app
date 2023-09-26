import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import SelectBox from "../../../Containers/SelectBox";
import { CriteriaOptions } from "../../../Constants";
import { AppState, HandleEventInterface } from "../../../Interface";
import { AppContext } from "../../../Context";

const Criteria = () => {
  const { searchCriteria, setSearchCriteria } = useContext<AppState>(AppContext);

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
