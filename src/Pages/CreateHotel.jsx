// components/CreateHotel.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addHotel } from '../Redux/hotelsSlice';


import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
const CreateHotel = () => {
  const dispatch = useDispatch();
  const [hotelName, setHotelName] = useState('');
  const [category, setCategory] = useState('');

  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedCity, setSelectedCity] = useState('');

  const categories = ['1 Star', '2 Star', '3 Star']; // Predefined options

  const { countries } = useSelector((state) => state.countries);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHotel({ name: hotelName, country: selectedCountry.country, city: selectedCity }));
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
      <FormControl fullWidth>
        <InputLabel>Countries</InputLabel>
        <Select
          value={selectedCountry?.country}
          label="Country"
          onChange={(e) => setSelectedCountry(countries.find(country => country.country === e.target.value))}
        >
          <MenuItem value="">Select Country</MenuItem>
          {countries.map((country, index) => (
            <MenuItem key={index} value={country.country}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Cities</InputLabel>
        <Select
          value={selectedCity}
          label="Country"
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <MenuItem value="">Select City from {selectedCountry.country}</MenuItem>
          {selectedCountry?.cities && selectedCountry?.cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
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

export default CreateHotel;
