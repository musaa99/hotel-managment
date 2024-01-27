import { combineReducers } from 'redux';

import hotelReducer from './hotelsSlice';
import countriesReducer from './countrySlice';
// import categoryReducer from './slices/categorySlice';


// Combine the individual reducers into a root reducer
const rootReducer = combineReducers({
  hotels: hotelReducer,
  countries: countriesReducer,
  // categories: categoryReducer,
});

export default rootReducer;