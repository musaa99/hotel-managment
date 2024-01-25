import { createSlice } from '@reduxjs/toolkit';

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: [],
  reducers: {
    addHotel: (state, action) => {
      state.push(action.payload);
    },
    updateHotel: (state, action) => {
      const { id, updatedHotel } = action.payload;
      const hotelIndex = state.findIndex((hotel) => hotel.id === id);
      if (hotelIndex !== -1) {
        state[hotelIndex] = updatedHotel;
      }
    },
    deleteHotel: (state, action) => {
      return state.filter((hotel) => hotel.id !== action.payload);
    },
  },
});

export const { addHotel, updateHotel, deleteHotel } = hotelsSlice.actions;
export default hotelsSlice.reducer;
