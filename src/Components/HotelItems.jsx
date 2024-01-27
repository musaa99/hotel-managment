// components/HotelItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteHotel } from '../Redux/hotelsSlice';
import { Card, CardContent, Typography, Button, Rating, Box } from '@mui/material';
import HotelEditForm from './HotelEditForm';
import Modal from './Modal';

const HotelItem = ({ hotel }) => {
  const dispatch = useDispatch();
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteHotel(hotel.id));
  };

  const handleEditClick = () => {
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  return (
    <Card style={{ margin: '10px', padding: '10px', height: '200px' }}>
      <CardContent>
        <Typography variant="h5">{hotel.name}</Typography>
        <Typography variant="subtitle1" sx={{ my: 1 }}>Address: {hotel.city}, {hotel.country}</Typography>
        <Box sx={{my: 1 }}>
          <Rating name="read-only" value={hotel.category} readOnly />
        </Box>
        <Button variant="outlined" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="outlined" color="primary" style={{ marginLeft: '10px' }} onClick={handleEditClick}>
          Edit
        </Button>
      </CardContent>
      <Modal
        open={editDialogOpen}
        onClose={handleEditDialogClose}
        dialogContent={<HotelEditForm hotel={hotel} onClose={handleEditDialogClose} />}
      />
    </Card>
  );
};

export default HotelItem;
