// components/HotelList.js
import React from 'react';
import { useSelector } from 'react-redux';
import HotelItem from './HotelItem';

const HotelList = () => {
  const hotels = useSelector((state) => state.hotels.list);
  const filter = useSelector((state) => state.hotels.filter);

  const filteredHotels = filter
    ? hotels.filter((hotel) => hotel.category === filter)
    : hotels;

  return (
    <div>
      <h2>Hotel List</h2>
      {filteredHotels.map((hotel) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
