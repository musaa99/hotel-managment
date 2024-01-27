// components/HotelAddForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addHotel } from '../Redux/hotelsSlice';


import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Categories from '../Components/Categories';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
const HotelAddForm = ({closeDialog}) => {
  const dispatch = useDispatch();
  const [hotelName, setHotelName] = useState('');
  const [category, setCategory] = useState('');

  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedCity, setSelectedCity] = useState('');

  const { countries } = useSelector((state) => state.countries);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHotel({
      name: hotelName,
      country: selectedCountry.country,
      city: selectedCity,
      category: category,
    }));
    setHotelName('');
    setCategory('');
    closeDialog()
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
      <FormControl fullWidth style={{ marginBottom: 16, marginTop: 16 }}>
        <InputLabel>Countries</InputLabel>
        <Select
          value={selectedCountry?.country}
          label="Country"
          margin="normal"
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

      <FormControl fullWidth style={{ marginBottom: 16, marginTop: 16 }}>
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

      <Categories selectedRating={category} setSelectedRating={setCategory} />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Hotel
      </Button>
    </form>
  );
};

export default HotelAddForm;
