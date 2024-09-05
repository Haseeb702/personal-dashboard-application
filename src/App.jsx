import './index.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1b8320e7f079339b724b9a69c95ae273`

  const searchLocation = (event) => {
    if (event.key == 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.error("There was an error making the request!", error);
    });
    setLocation('');
    }
  }
  

  return (
    <div className="app">
      <div className="search">
        <input 
        type="text"
        value={location}
        placeholder="Enter Location"
        onChange = {event => setLocation(event.target.value)}
        onKeyDown={searchLocation}/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Toronto</p>
          </div>
          <div className="temp">
            <h1>20°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className='bold'>23°C</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>20%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>12 km/h</p>
              <>Wind Speed</>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
