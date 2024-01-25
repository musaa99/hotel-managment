// store.js
import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './hotelsSlice';
// import categoryReducer from './slices/categorySlice';

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    // categories: categoryReducer,
  },
});

export default store;
