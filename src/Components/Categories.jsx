import React from 'react';
import { FormControl, InputLabel, MenuItem, Rating, Select } from '@mui/material';

const Categories = ({ selectedRating, setSelectedRating }) => {

  const handleChange = (event) => {
    setSelectedRating(event.target.value);
  };

  return (
    <FormControl fullWidth style={{ marginBottom: 16, marginTop: 16 }}>
      <InputLabel id="rating-label">Rating</InputLabel>
      <Select
        labelId="rating-label"
        id="rating-select"
        value={selectedRating}
        label="Rating"
        onChange={handleChange}
      >
        {[0, 1, 2, 3, 4, 5].map((rating) => (
          <MenuItem key={rating} value={rating}>
            <Rating name="read-only" value={rating} readOnly />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Categories