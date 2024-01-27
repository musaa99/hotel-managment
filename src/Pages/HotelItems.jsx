// components/HotelItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteHotel } from '../Redux/hotelsSlice';
import { Card, CardContent, Typography, Button, Dialog, DialogContent, DialogActions } from '@mui/material';
import HotelEditForm from './HotelEditForm';
import Modal from '../Components/Modal';

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
    <Card style={{ margin: '10px', padding: '10px' }}>
      <CardContent>
        <Typography variant="h5">{hotel.name}</Typography>
        <Typography variant="subtitle1" sx={{ my: 1 }}>Address: {hotel.city}, {hotel.country}</Typography>
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
