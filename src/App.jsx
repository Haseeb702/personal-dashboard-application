import './index.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `http://localhost:5001/weather?location=${location}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.error("There was an error making the request!", error);
    });
    setLocation('');
    }
  }
  
  let temp;
  let description;
  let feelsLike;
  let humidity;
  let windSpeed;

  if (data.main) {
    temp = <h1>{Math.round(data.main.temp)}°C</h1>;
    feelsLike = <p className="bold">{Math.round(data.main.feels_like)}°C</p>;
    humidity = <p className="bold">{data.main.humidity}%</p>;
  }

  if (data.weather) {
    description = <p>{data.weather[0].description}</p>;
  }

  if (data.wind) {
    windSpeed = <p className="bold">{data.wind.speed} km/h</p>;
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
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {temp}
          </div>
          <div className="description">
            {description}
          </div>
          <div className="bottom">
            <div className="feels">
              {feelsLike}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {humidity}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {windSpeed}
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
