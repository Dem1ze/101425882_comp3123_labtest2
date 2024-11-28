import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  // Convert temperature from Kelvin to Celsius
  const temperature = (weather.main.temp - 273.15).toFixed(2);
  const weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-container">
      <Card className="weather-card">
        <Card.Body>
          <Row>
            <Col md={6}>
              <Card.Title>{weather.name}</Card.Title>
              <Card.Text>
                <h4>{temperature}°C</h4>
                <p>{weather.weather[0].description}</p>
              </Card.Text>
            </Col>
            <Col md={6}>
              <img src={weatherIcon} alt={weather.weather[0].description} className="weather-icon" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherDisplay;
