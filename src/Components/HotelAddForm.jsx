// components/HotelAddForm.js
import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addHotel } from '../Redux/hotelsSlice';

import { TextField, Button, MenuItem,  } from '@mui/material';
import Categories from './Categories';
import CustomSelect from './CustomSelect';

const HotelAddForm = ({closeDialog}) => {
  const dispatch = useDispatch();
  const [hotelName, setHotelName] = useState('');
  const [category, setCategory] = useState(0);

  const [selectedCountry, setSelectedCountry] = useState();
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

  const disabled = !selectedCity || !hotelName;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Hotel Name"
        value={hotelName}
        onChange={(e) => setHotelName(e.target.value)}
        fullWidth
        margin="normal"
      />

      <CustomSelect
        label="Countries"
        selected={selectedCountry?.country}
        setSelected={(e) => setSelectedCountry(countries.find(country => country.country === e.target.value))}
        menu={
          countries.map((country, index) => (
            <MenuItem key={index} value={country.country}>
              {country.country}
            </MenuItem>
          ))
        }
      />
      {selectedCountry &&
        <CustomSelect
          label="Cities"
          selected={selectedCity}
          setSelected={(e) => setSelectedCity(e.target.value)}
          menu={
            selectedCountry?.cities && selectedCountry?.cities.map((city, index) => (
              <MenuItem key={index} value={city}>
                {city}
              </MenuItem>
            ))
          }
        />
      }
      <Categories selectedRating={category} setSelectedRating={setCategory} />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={disabled}
      >
        Add Hotel
      </Button>
    </form>
  );
};

export default HotelAddForm;
