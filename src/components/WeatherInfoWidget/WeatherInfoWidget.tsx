import React from 'react';
import { Container, Value, Property, WeatherData } from './WeatherInfoWidget.styled';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

interface Props {
  humidity: number;
  precip: number;
}

const WeatherInfoWidget = ({ humidity, precip }: Props) => {
  const roundedPrecip = Math.round(precip);

  return (
    <Container data-testid={WeatherInfoWidgetTestIds.Container}>
      <WeatherData>
        <Property>Precip:</Property>
        <Value>{roundedPrecip}&nbsp;mm</Value>
      </WeatherData>
      <WeatherData>
        <Property>Humidity:</Property>
        <Value>{humidity}%</Value>
      </WeatherData>
    </Container>
  );
};

export { WeatherInfoWidget };
