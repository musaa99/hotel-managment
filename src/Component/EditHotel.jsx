// components/HotelEditForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editHotel } from '../reducers/hotelReducer';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const HotelEditForm = ({ hotel, onClose }) => {
  const dispatch = useDispatch();
  const [editedHotelName, setEditedHotelName] = useState(hotel.name);
  const [editedCategory, setEditedCategory] = useState(hotel.category);

  const categories = ['1 Star', '2 Star', '3 Star']; // Predefined options

  const handleEdit = () => {
    dispatch(editHotel({ id: hotel.id, name: editedHotelName, category: editedCategory }));
    onClose();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TextField
        label="Hotel Name"
        value={editedHotelName}
        onChange={(e) => setEditedHotelName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)}>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={handleEdit} variant="contained" color="primary" fullWidth>
        Save Changes
      </Button>
    </form>
  );
};

export default HotelEditForm;
