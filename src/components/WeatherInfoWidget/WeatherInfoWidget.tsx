import React from 'react';
import { Container, Value, Property, WeatherData } from './WeatherInfoWidget.styled';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

interface Props {
  humidity: number;
  precip: number;
  pressure: number;
  gust: number;
}

const WeatherInfoWidget = ({ humidity, precip, pressure, gust }: Props) => {
  const roundedPrecip = Math.round(precip);
  const roundedGust = Math.round(gust);

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
      <WeatherData>
        <Property>Pressure:</Property>
        <Value>{pressure}&nbsp;mb</Value>
      </WeatherData>
      <WeatherData>
        <Property>Gusts:</Property>
        <Value>{roundedGust}&nbsp;km/h</Value>
      </WeatherData>
    </Container>
  );
};

export { WeatherInfoWidget };
