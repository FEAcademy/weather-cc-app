import React from 'react';
import { Container, Value, Property, WeatherData } from './WeatherInfoWidget.styled';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

interface Props {
  humidity: number;
  precip: number;
}

const WeatherInfoWidget = ({ humidity, precip }: Props) => {
  return (
    <Container data-testid={WeatherInfoWidgetTestIds.Container}>
      <WeatherData>
        <Property>Humidity:</Property>
        <Value>{humidity}%</Value>
      </WeatherData>
      <WeatherData>
        <Property>Precip:</Property>
        <Value>{precip} mm</Value>
      </WeatherData>
    </Container>
  );
};

export { WeatherInfoWidget };
