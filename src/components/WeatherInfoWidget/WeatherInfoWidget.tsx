import React from 'react';
import { Container, Value, Property, WeatherData } from './WeatherInfoWidget.styled';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

interface Props {
  humidity: number;
  cloud: number;
}

const WeatherInfoWidget = ({ humidity, cloud }: Props) => {
  return (
    <Container data-testid={WeatherInfoWidgetTestIds.Container}>
      <WeatherData>
        <Property>Cloudiness:</Property>
        <Value>{cloud}%</Value>
      </WeatherData>
      <WeatherData>
        <Property>Humidity:</Property>
        <Value>{humidity}%</Value>
      </WeatherData>
    </Container>
  );
};

export { WeatherInfoWidget };
