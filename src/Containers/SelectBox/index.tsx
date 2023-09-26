import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

type SelectProps = {
  label: string;
  id: string;
  handleChange: any;
  options: any[];
  multiple: boolean,
  value: string | string[]
};

const SelectBox = (props: SelectProps) => {
  const { label, id, handleChange, options, multiple, value } = props;
  return (
    <FormControl sx={{ minWidth: 150 }}> 
      <InputLabel id='input-label' data-testid='select-label'>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        multiple={multiple}
        label={label}
        onChange={handleChange}
        data-testid='select-dropdown'
        
      >
        {options.map((option) => {
          return <MenuItem value={option.value} key={option.value} data-testid={option.value}>{option.text}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
