// components/HotelForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHotel } from '../Redux/hotelsSlice';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
const HotelForm = () => {
  const dispatch = useDispatch();
  const [hotelName, setHotelName] = useState('');
  const [category, setCategory] = useState('');

  const categories = ['1 Star', '2 Star', '3 Star']; // Predefined options

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHotel({ name: hotelName, category }));
    setHotelName('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Hotel Name"
        value={hotelName}
        onChange={(e) => setHotelName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="">Select Category</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Hotel
      </Button>
    </form>
  );
};

export default HotelForm;
