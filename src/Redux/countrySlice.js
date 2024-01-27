import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: { countries: [] },
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;

// Async action to fetch hotels using Axios
export const fetchCountries = () => async (dispatch) => {
  try {
    // Fetch data from the provided API endpoint
    const response = await axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json');
    const data = response.data;

    // Process the data to extract countries and their cities
    const countries = data.reduce((acc, entry) => {
      // Check if the country already exists in the accumulator
      const existingEntry = acc.find(item => item.country === entry.country);

      // If the country exists, add the city/subcountry if not already present
      if (existingEntry) {
        if (!existingEntry.cities.includes(entry.subcountry)) {
          existingEntry.cities.push(entry.subcountry);
        }
      } else {
        // If the country doesn't exist, create a new entry
        acc.push({
          country: entry.country,
          cities: [entry.subcountry]
        });
      }

      return acc;
    }, []);

    // Dispatch the action to set the countries in the state
    dispatch(setCountries(countries));
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error('Error fetching countries:', error);
  }
};

export default countriesSlice.reducer;