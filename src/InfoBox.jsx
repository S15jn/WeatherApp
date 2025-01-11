import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import weatherImg from './assets/weather.jpg';
import hotImg from './assets/hot.jpg';
import coldImg from './assets/cold.jpg';
import rainyImg from './assets/rainy.jpg';
import dryImg from './assets/dry.jpg';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

import LightModeIcon from '@mui/icons-material/LightMode';
import { MdOutlineSevereCold } from "react-icons/md";

import { FaCloudRain } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import './InfoBox.css';

const InfoBox = ({ info }) => {
    // Ensure that `info` is provided and contains valid data
    if (!info) {
        return (
            <div className="infobox">
                <Typography variant="h6" color="error" align="center">
                    No weather information available.
                </Typography>
            </div>
        );
    }

    return (

        <div className="infobox">
            <div className="cardcontainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia

                        sx={{ height: 140 }}
                        image={(info.humidity >= 60 && info.temp > 30) ? hotImg : (info.humidity <= 40 || info.humidity >= 60 && info.temp < 15) ? coldImg : info.humidity >= 80 ? rainyImg : info.humidity <= 50 ? weatherImg : dryImg}
                        title="Weather"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            style={{ fontWeight: 'bolder' }}
                        >
                            {info.city && (
                                <>
                                    {info.city} {/* Display the city name */}
                                    {(info.humidity >= 60 && info.temp > 30) ? (
                                        <LightModeIcon />
                                    ) : (info.humidity <= 40 || (info.humidity >= 60 && info.temp < 15)) ? (
                                        <MdOutlineSevereCold />
                                    ) : info.humidity >= 80 ? (
                                        <FaCloudRain />
                                    ) : info.humidity <= 50 ? (
                                        <FaCloud />
                                    ) : (
                                        <FaCloudSun />
                                    )}
                                </>
                            )}



                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '30px',
                                    justifyItems: 'center',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                }}
                            >
                                <div className="first">
                                    <div>
                                        <DeviceThermostatIcon />
                                        {info.temp !== undefined ? `${info.temp}°C` : "N/A"}
                                    </div>
                                    <div>
                                        <p>Feels like {info.feelsLike !== undefined ? `${info.feelsLike}°C` : "N/A"}</p>
                                    </div>
                                </div>
                                <div className="second">
                                    <div>Weather: {info.weather || "N/A"}</div>
                                    <div>Humidity: {info.humidity > 80 ? `${info.humidity}%` : `${info.humidity}%`}</div>
                                    <div>Min Temp: {info.tempMin !== undefined ? `${info.tempMin}°C` : "N/A"}</div>
                                    <div>Max Temp: {info.tempMax !== undefined ? `${info.tempMax}°C` : "N/A"}</div>
                                </div>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default InfoBox;
