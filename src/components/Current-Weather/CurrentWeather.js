import './CurrentWeather.css';

const CurrentWeather = ({data}) => {
    // destructuring the data
    const {city, weather, main:{humidity, temp, pressure, feels_like}, wind:{speed}} = data;
    const {description, icon} = weather[0];
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{city}</p>
                    <p className='weather-description'>{description}</p>
                </div>
                <img alt='weather' className='weather-icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
            </div>
            <div className='bottom'>
                
                <p className='temperature'>{Math.round(temp)} °C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>{Math.round(feels_like)} °C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{humidity} %</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{pressure} hPa</span>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default CurrentWeather