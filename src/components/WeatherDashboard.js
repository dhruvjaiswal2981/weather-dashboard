import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherDashboard.css';

const API_KEY = '84b79da5e5d7c92085660485702f4ce8'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric'); // Celsius by default
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');

    try {
      const currentWeatherResponse = await axios.get(
        `${BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );

      const forecastResponse = await axios.get(
        `${BASE_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );

      setWeather(currentWeatherResponse.data);
      setForecast(forecastResponse.data.list.filter((_, i) => i % 8 === 0)); // Every 8 items for daily forecast
    } catch (err) {
      setError('City not found or API error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchCurrentLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoords(latitude, longitude);
      },
      (error) => {
        setError('Unable to retrieve your location');
      }
    );
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    setError('');

    try {
      const currentWeatherResponse = await axios.get(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
      );

      const forecastResponse = await axios.get(
        `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
      );

      setWeather(currentWeatherResponse.data);
      setForecast(forecastResponse.data.list.filter((_, i) => i % 8 === 0));
    } catch (err) {
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      fetchCurrentLocationWeather();
    }
  }, [unit]);

  return (
    <div className={`weather-dashboard ${darkMode ? 'dark' : 'light'}`}>
      <h1>Weather Dashboard</h1>
      <button onClick={toggleTheme}>Switch to {darkMode ? 'Light' : 'Dark'} Mode</button>
      <button onClick={toggleUnit}>Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}</button>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="current-weather">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
        </div>
      )}

      <div className="forecast">
        <h3>5-Day Forecast</h3>
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>Temp: {day.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
            <p>{day.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="icon" />
          </div>
        ))}
      </div>
      <h5>Weather Dashboard © 2024 Made By Dhruv Jaiswal</h5>
    </div>
  );
};

export default WeatherDashboard;
