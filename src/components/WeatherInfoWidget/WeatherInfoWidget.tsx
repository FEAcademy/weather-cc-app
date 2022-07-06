import React from 'react';
import { Container, Value, Property, WeatherData } from './WeatherInfoWidget.styled';

interface Props {
  humidity: number;
}

const WeatherInfoWidget = ({ humidity }: Props) => {
  return (
    <Container>
      <WeatherData>
        <Property>Humidity:</Property>
        <Value>{humidity}%</Value>
      </WeatherData>
    </Container>
  );
};

export { WeatherInfoWidget };
