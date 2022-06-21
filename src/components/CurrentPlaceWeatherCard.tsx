import React from 'react';

const CurrentPlaceWeatherCard = () => {
    return (
        <div className="current-weather">
            <div className="weather-card">
                <div className="weather-card__content">
                    <div className="weather-card__title">Moscow</div>
                    <div className="weather-card__subtitle">Your current location</div>
                    <div className="weather-card__characteristics">
                        <div className="weather-characteristics__item">
                            <div className="weather-characteristic">Weather</div>
                            <div className="weather-current-characteristic">Clouds</div>
                        </div>
                        <div className="weather-characteristics__item">
                            <div className="weather-characteristic">Temperature</div>
                            <div className="weather-current-characteristic">7 °C</div>
                        </div>
                        <div className="weather-characteristics__item">
                            <div className="weather-characteristic">Humidity</div>
                            <div className="weather-current-characteristic">45 %</div>
                        </div>
                    </div>
                    <div className="weather-card__updated-at">7 minutes ago</div>
                    <div className="weather-card__buttons-container">
                        <button className="weather-card__button">RELOAD</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentPlaceWeatherCard;
