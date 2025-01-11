import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: 'Delhi',
        feelLike: 24.8,
        temp: 25.05, 
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather  App By Somya Jain</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}

export default WeatherApp;
