import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import CreateHotel from './Pages/CreateHotel';
import HotelList from './Pages/HotelList';
import { fetchCountries } from './Redux/countrySlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  return (
    <div className="App">
       <h1>Hotel Management App</h1>
     <CreateHotel/>
     <HotelList/>
    </div>
  );
}

export default App;
