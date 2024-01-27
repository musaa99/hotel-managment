import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import HotelAddForm from './Pages/HotelAddForm';
import HotelList from './Pages/HotelList';
import { fetchCountries } from './Redux/countrySlice';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import HotelCategories from './Pages/HotelCategories';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/hotel" element={<HotelList />} />
          <Route path="/categories" element={<HotelCategories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
