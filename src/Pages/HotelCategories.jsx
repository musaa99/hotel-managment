import { Alert, Box, Button, Card, Container, Divider, Grid, Paper, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';
import Categories from '../Components/Categories';
import { useSelector } from 'react-redux';
import HotelItem from './HotelItems';

const HotelCategories = () => {

  const hotels = useSelector((state) => state.hotels.list);

  const [category, setCategory] = useState();

  const filteredHotels = hotels.filter(hotel => hotel.category === category);

  const hotelsByCategory = hotels.reduce((acc, hotel) => {
    const category = hotel.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(hotel);
    return acc;
  }, {});

  return (
    <Box>
      <Card sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
        <Categories selectedRating={category} setSelectedRating={setCategory} />
        <Button
          variant="contained"
          onClick={() => setCategory()}
          color="primary"
        >
          Clear Filter
        </Button>
      </Card>

      {(category !== undefined) ?
        <Grid container spacing={2}>
          {filteredHotels.length > 0
            ? filteredHotels.map(hotel => (
              <Grid item key={hotel.id} xs={12} sm={6} md={4} lg={3}>
                <HotelItem key={hotel.id} hotel={hotel} />
              </Grid>
            ))
            :
            <Container
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100vh',
                }}
              >
                <Alert severity="info" sx={{ fontSize: '2.5rem' }}>
                    No available hotel in category {category}.
                </Alert>
            </Container>
          }
        </Grid>
       : <div>
          {Object.keys(hotelsByCategory).reverse().map(category => (
            <div key={category}>
              <Box sx={{display: 'flex', alignItems: 'center',}}>
                <h2>Category {category} </h2>
                <Rating name="read-only" value={category} readOnly style={{margin: '0 16px'}} />
              </Box>
              <Grid container spacing={2}>
                {hotelsByCategory[category].map(hotel => (
                  <Grid item key={hotel.id} xs={12} sm={6} md={4} lg={3}>
                    <HotelItem key={hotel.id} hotel={hotel} />
                  </Grid>
                ))}
              </Grid>
              <Divider />
            </div>
          ))}
        </div>
      }
    </Box>
  )
}

export default HotelCategories;