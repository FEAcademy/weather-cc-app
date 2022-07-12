import React from 'react';
import { Container, Value, Property, WeatherData } from './WeatherInfoWidget.styled';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

interface Props {
  humidity: number;
  windSpeed: number;
  windDir: string;
}

const WeatherInfoWidget = ({ humidity, windSpeed, windDir }: Props) => {
  return (
    <Container data-testid={WeatherInfoWidgetTestIds.Container}>
      <WeatherData>
        <Property>Humidity:</Property>
        <Value>{humidity}%</Value>
      </WeatherData>
      <WeatherData>
        <Property>Wind:</Property>
        <Value>
          {windDir} {Math.round(windSpeed)} km/h
        </Value>
      </WeatherData>
    </Container>
  );
};

export { WeatherInfoWidget };
