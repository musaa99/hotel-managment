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

export default hotelSlice.reducer;
