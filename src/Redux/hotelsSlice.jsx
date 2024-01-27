// import { createSlice } from '@reduxjs/toolkit';

// const hotelsSlice = createSlice({
//   name: 'hotels',
//   initialState: [],
//   reducers: {
//     addHotel: (state, action) => {
//       state.push(action.payload);
//     },
//     updateHotel: (state, action) => {
//       const { id, updatedHotel } = action.payload;
//       const hotelIndex = state.findIndex((hotel) => hotel.id === id);
//       if (hotelIndex !== -1) {
//         state[hotelIndex] = updatedHotel;
//       }
//     },
//     deleteHotel: (state, action) => {
//       return state.filter((hotel) => hotel.id !== action.payload);
//     },
//   },
// });

// export const { addHotel, updateHotel, deleteHotel } = hotelsSlice.actions;
// export default hotelsSlice.reducer;
// reducers/hotelReducer.js
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
  name: 'hotels',
  initialState: { list: [], filter: '' },
  reducers: {
    setHotels: (state, action) => {
      state.list = action.payload;
    },
    addHotel: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });
    },
    editHotel: (state, action) => {
      const index = state.list.findIndex((hotel) => hotel.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
      }
    },
    deleteHotel: (state, action) => {
      state.list = state.list.filter((hotel) => hotel.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setHotels, addHotel, editHotel, deleteHotel, setFilter } = hotelSlice.actions;

// Async action to fetch hotels using Axios
export const fetchHotels = () => async (dispatch) => {
  try {
    const response = await axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json');
    
    // Assuming the relevant hotel data is nested under a key (e.g., 'hotels')
    const hotels = response.data.map((hotel) => ({ ...hotel, category: '' })); // Initialize category as empty
    dispatch(setHotels(hotels));
  } catch (error) {
    console.error('Error fetching hotels:', error);
  }
};

export default hotelSlice.reducer;
