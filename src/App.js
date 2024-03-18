import './App.css';
import Search from './components/Search/Search';
import CurrentWeather from './components/Current-Weather/CurrentWeather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Api';
import { useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [show, setShow] = useState(false);

  // callback passed to Search child component and called there passing search data
  function handleOnSearchChange(searchData) {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(' ');

    fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    .then(async(response) => {
      const weatherData = await response.json();
      // console.log(weatherData);
      setWeather({city: searchData.label, ...weatherData});
    })
    .catch( err => console.log(err));

    setShow(true);
  }

  // set show state variable when back arrow is clicked from Current weather component
  function onClickChangeShow() {
    setShow(false);
  }

  return (
    <div className='container'>
      {
        !show ? <Search onSearchChange={handleOnSearchChange} /> : ( weather && <CurrentWeather changeShow={onClickChangeShow} data={weather} /> )  
      }
    </div>
  );
}

export default App;
