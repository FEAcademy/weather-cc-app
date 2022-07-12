import React from 'react';
import { Container, Value, Property, WeatherData } from './WeatherInfoWidget.styled';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

interface Props {
  humidity: number;
  gust: number;
}

const WeatherInfoWidget = ({ humidity, gust }: Props) => {
  const rounded_gust: number = Math.round(gust);

  return (
    <Container data-testid={WeatherInfoWidgetTestIds.Container}>
      <WeatherData>
        <Property>Humidity:</Property>
        <Value>{humidity}%</Value>
      </WeatherData>
      <WeatherData>
        <Property>Gusts:</Property>
        <Value>{rounded_gust}&nbsp;km/h</Value>
      </WeatherData>
    </Container>
  );
};

export { WeatherInfoWidget };
