// components/HotelEditForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editHotel } from '../Redux/hotelsSlice';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Categories from '../Components/Categories';
import CustomSelect from '../Components/CustomSelect';

const HotelEditForm = ({ hotel, onClose }) => {
  const dispatch = useDispatch();
  const [editedHotelName, setEditedHotelName] = useState(hotel.name);
  const [editedCategory, setEditedCategory] = useState(hotel.category);

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

      <Categories selectedRating={editedCategory} setSelectedRating={setEditedCategory} />

      <Button onClick={handleEdit} variant="contained" color="primary" fullWidth>
        Save Changes
      </Button>
    </form>
  );
};

export default HotelEditForm;
