import React from 'react';
import { FormControl, InputLabel, MenuItem, Rating, Select } from '@mui/material';

const CustomSelect = ({label, selected, setSelected, menu}) => {
  return (
    <FormControl fullWidth style={{ marginBottom: 16, marginTop: 16 }}>
      <InputLabel id="rating-label"> {label} </InputLabel>
      <Select
        labelId="rating-label"
        id="rating-select"
        value={selected}
        label="Rating"
        onChange={setSelected}
      >
        {menu}
      </Select>
    </FormControl>
  )
}

export default CustomSelect;