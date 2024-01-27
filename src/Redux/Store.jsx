// store.js
import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './hotelsSlice';
import countriesReducer from './countrySlice';
// import categoryReducer from './slices/categorySlice';

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    countries: countriesReducer,
    // categories: categoryReducer,
  },
});

export default store;
