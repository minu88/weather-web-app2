import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './Forecast.css';


const Forecast = ({data}) => {

    const {list} = data;

    const mapList = list.filter((item, index) => index % 8 === 0)
    // console.log('mapList', mapList);

    return (
        <div className="forecast">
            <label className="title">Daily Forecast:</label>
            <Accordion allowZeroExpanded>
                {
                    mapList.map((item, index) => {
                        const {dt, main:{temp_min, temp_max, pressure, humidity, feels_like}, weather, wind:{speed}} = item;
                        const {description, icon} = weather[0];

                        return (
                            <AccordionItem key={dt}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className="button-items">
                                            <img alt="weather" className="btn-icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                                            <label className="description">{description}</label>
                                            <label className="min-max">
                                                {Math.round(temp_min)}°C / {Math.round(temp_max)}°C
                                            </label>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="daily-details-grid">
                                        <div className="daily-details-grid-item">
                                            <label>Feels Like</label>
                                            <label>{Math.round(feels_like)} °C</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label>Pressure</label>
                                            <label>{pressure} hPa</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label>Humidity</label>
                                            <label>{humidity} %</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label>Wind Speed</label>
                                            <label>{speed} m/s</label>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
                
            </Accordion>
        </div>
    )
}

export default Forecast