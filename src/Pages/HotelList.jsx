// components/HotelList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HotelItem from '../Components/HotelItems';

import { Box, Button, Grid, Paper } from '@mui/material';
import Modal from '../Components/Modal';
import HotelAddForm from '../Components/HotelAddForm';

const HotelList = () => {
  const hotels = useSelector((state) => state.hotels.list);
  const filter = useSelector((state) => state.hotels.filter);

  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const filteredHotels = filter
    ? hotels.filter((hotel) => hotel.category === filter)
    : hotels;

  return (
    <div>
      <h2>Hotel List</h2>
      <Box>
        <Button
          variant="contained"
          onClick={() => setAddDialogOpen(true)} color="primary"
        >
          Add Hotel
        </Button>
      </Box>
      <Grid container spacing={2}>
        {filteredHotels.map((hotel) => (
          <Grid item key={hotel.id} xs={12} sm={6} md={4} lg={3}>
            <HotelItem key={hotel.id} hotel={hotel} />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={addDialogOpen}
        onClose={() => setAddDialogOpen(false)}
        dialogContent={
          <HotelAddForm
            closeDialog={() => setAddDialogOpen(false)}
          />
        }
      />
    </div>
  );
};

export default HotelList;
