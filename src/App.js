import './App.css';
import Search from './components/Search/Search';
import CurrentWeather from './components/Current-Weather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Api';
import { useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // callback passed to Search child component and called there passing search data
  function handleOnSearchChange(searchData) {
    // console.log(searchData);
    const [lat, lon] = searchData.value.split(' ');
    // console.log(lat, lon);
    const fetchWeather = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const fetchForecast = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    // fetching all the promises in order
    Promise.all([fetchWeather, fetchForecast])
      .then(async(response) => {

        const weatherData = await response[0].json();
        const forecastData = await response[1].json();

        setWeather({city: searchData.label, ...weatherData});
        setForecast({city: searchData.label, ...forecastData});
      })
      .catch( err => console.log(err));
  }
  // console.log('forecast', forecast);

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      <div className='weather-forecast'>
        {weather && <CurrentWeather data={weather}  />}
        {forecast && <Forecast data={forecast}  />}
      </div>
    </div>
  );
}

export default App;
