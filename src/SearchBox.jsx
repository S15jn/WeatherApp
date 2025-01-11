import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

const SearchBox = ({ updateInfo }) => {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_Url = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6a4dac74a7cb48dd01fc2de7f377cf57";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_Url}?q=${city}&appid=${API_KEY}&units=metric`);

            if (!response.ok) {
                throw new Error("City not found or API error");
            }

            const jsonResponses = await response.json();
            return {
                city: jsonResponses.name, // Use resolved city name
                temp: jsonResponses.main.temp,
                tempMin: jsonResponses.main.temp_min,
                tempMax: jsonResponses.main.temp_max,
                humidity: jsonResponses.main.humidity,
                feelsLike: jsonResponses.main.feels_like,
                weather: jsonResponses.weather[0].description,
            };
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            setError(false); // Reset error state
            const weatherInfo = await getWeatherInfo();
            updateInfo(weatherInfo);
            setCity(""); // Clear input field on successful search
        } catch (err) {
            setError(true); // Set error if API call fails
        }
    };

    return (
        <div className="searchbox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="City Name"
                    variant="standard"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /> <br /> <br />
                <Button variant="contained" className="searchbtn" type="submit">
                    Search
                </Button>
                {error && <p className="error">No such place exists</p>}
            </form>
        </div>
    );
};

export default SearchBox;
