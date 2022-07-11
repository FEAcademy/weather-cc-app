import React from 'react';
import { Container, Value, Property, WeatherData } from './WeatherInfoWidget.styled';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

interface Props {
  humidity: number;
  pressure: number;
}

const WeatherInfoWidget = ({ humidity, pressure }: Props) => {
  return (
    <Container data-testid={WeatherInfoWidgetTestIds.Container}>
      <WeatherData>
        <Property>Humidity:</Property>
        <Value>{humidity}%</Value>
      </WeatherData>
      <WeatherData>
        <Property>Pressure:</Property>
        <Value>{pressure}&nbsp;mb</Value>
      </WeatherData>
    </Container>
  );
};

export { WeatherInfoWidget };
