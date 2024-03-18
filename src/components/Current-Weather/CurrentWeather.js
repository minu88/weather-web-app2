import './CurrentWeather.css';

const CurrentWeather = ({data, changeShow}) => {
    // destructuring the data
    const {city, weather, main:{humidity, temp, pressure, feels_like}, wind:{speed}} = data;
    const {description, icon} = weather[0];
    return (
			<div className='weather'>
				<div className='top'>
					<img className='top-left-arrow' src='left-arrow.png' alt='left-arrow' onClick={() => changeShow()} />
					<span className='top-text'>Weather App</span>					
						{/* <img alt='weather' className='weather-icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} /> */}
				</div>
				<div className='middle'>						
					{/* <p className='temperature'>{Math.round(temp)} °C</p> */}
					<img alt='weather' className='weather-icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
					<p className='temperature'>{Math.round(temp)}°C</p>
					<p className='description'>{description}</p>
					<div className='city-details'>
						<img className='location-img' src='location-icon.png' alt='location-icon' />
						<p className='city-name'>{city}</p>
					</div>
				</div>
				<div className='bottom'>
					<div className='bottom-left'>
						<img alt='feels-like' src='feels-like.png' className='feels-like-img' />
						<div className='feels-like'>
							<p className='feels-like-top'>{Math.round(feels_like)}°C</p>
							<p className='feels-like-bottom'>Feels Like</p>
						</div>
					</div>
					<div className='bottom-right'>
						<img alt='humidity' src='humidity.png' className='humidity-img' />
							<div className='humidity'>
								<p className='humidity-top'>{humidity}%</p>
								<p className='humidity-bottom'>Humididty</p>
							</div>
						</div>
				</div>
			</div>
    )
}

export default CurrentWeather