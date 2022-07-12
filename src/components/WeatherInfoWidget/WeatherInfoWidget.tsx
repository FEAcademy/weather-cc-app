import React from 'react';
import { Container, Value, Property, WeatherData } from './WeatherInfoWidget.styled';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

interface Props {
  humidity: number;
  windSpeed: number;
}

const WeatherInfoWidget = ({ humidity, windSpeed }: Props) => {
  const roundedWindSpeed = Math.round(windSpeed);

  return (
    <Container data-testid={WeatherInfoWidgetTestIds.Container}>
      <WeatherData>
        <Property>Humidity:</Property>
        <Value>{humidity}%</Value>
      </WeatherData>
      <WeatherData>
        <Property>Wind:</Property>
        <Value>{roundedWindSpeed} km/h</Value>
      </WeatherData>
    </Container>
  );
};

export { WeatherInfoWidget };
