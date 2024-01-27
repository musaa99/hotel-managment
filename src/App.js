import './App.css';
import HotelForm from './Component/HotelForm';
import HotelList from './Component/HotelList';

function App() {
  return (
    <div className="App">
       <h1>Hotel Management App</h1>
     <HotelForm/>
     <HotelList/>
    </div>
  );
}

export default App;
