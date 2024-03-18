import './CurrentWeather.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../../Api';

const CurrentWeather = () => {
	const [data, setData] = useState(null);
	const { place, lat, lng } = useParams();

	// fetch weather functionality according to the lat, lng
	function fetchWeather() {
		fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`)
		.then(async(response) => {
			const weatherData = await response.json();
			// console.log('weatherData', weatherData);
			setData(weatherData);
			
		})
		.catch( err => console.log(err));
	}

	useEffect(() => {
		fetchWeather();
	}, []);

	return (
		<div className='weather'>
			<div className='top'>
				<Link to='/'><img className='top-left-arrow' src='/left-arrow.png' alt='left-arrow' /></Link>
				<span className='top-text'>Weather App</span>					
			</div>
			<div className='middle'>						
				<img alt='weather' className='weather-icon' src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} />
				{data?.main?.temp ? <p className='temperature'>{Math.round(data?.main?.temp)}°C</p> : ''}
				<p className='description'>{data?.weather[0].description}</p>
				<div className='city-details'>
					<img className='location-img' src='/location-icon.png' alt='location-icon' />
					<p className='city-name'>{place}</p>
				</div>
			</div>
			<div className='bottom'>
				<div className='bottom-left'>
					<img alt='feels-like' src='/feels-like.png' className='feels-like-img' />
					<div className='feels-like'>
						<p className='feels-like-top'>{Math.round(data?.main?.feels_like)}°C</p>
						<p className='feels-like-bottom'>Feels Like</p>
					</div>
				</div>
				<div className='bottom-right'>
					<img alt='humidity' src='/humidity.png' className='humidity-img' />
						<div className='humidity'>
							{data?.main?.humidity ? <p className='humidity-top'>{Math.round(data?.main?.humidity)}%</p> : ''}
							<p className='humidity-bottom'>Humididty</p>
						</div>
					</div>
			</div>
		</div>
	)
}

export default CurrentWeather