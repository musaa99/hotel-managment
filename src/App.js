import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import CreateHotel from './Pages/CreateHotel';
import HotelList from './Pages/HotelList';
import { fetchCountries } from './Redux/countrySlice';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Home />
     {/* <CreateHotel/>
     <HotelList/> */}
    </div>
  );
}

export default App;
