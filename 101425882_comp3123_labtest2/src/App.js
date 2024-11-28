import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/Searchbar';
import WeatherDisplay from './components/Weatherdisplay';

function App() {
  const [city, setCity] = useState('Toronto');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=499c93bedd1caefe6032f68737773ae3`
        );
        setWeather(response.data);
      } catch (error) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar city={city} onCityChange={handleCityChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
