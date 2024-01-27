import { combineReducers } from 'redux';

import hotelReducer from './hotelsSlice';
import countriesReducer from './countrySlice';


// Combine the individual reducers into a root reducer
const rootReducer = combineReducers({
  hotels: hotelReducer,
  countries: countriesReducer,
});

export default rootReducer;