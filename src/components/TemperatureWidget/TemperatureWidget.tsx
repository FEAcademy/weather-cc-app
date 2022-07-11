import React from 'react';
import { Container, Icon, WeatherDescription, Temperature, TemperatureDetails } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  feelslikeTemperature: number;
  icon: string;
  currentTemperature: number;
  description: string;
}

const TemperatureWidget = ({ icon, description, currentTemperature, feelslikeTemperature }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <Icon src={icon} alt="Weather widget icon" />
      <div>
        <WeatherDescription>{description}</WeatherDescription>
        <Temperature data-testid={TemperatureWidgetTestIds.Temperature}>
          {currentTemperature}
          <span>&deg;C</span>
        </Temperature>
        <TemperatureDetails>
          feels like {feelslikeTemperature}
          <span>&deg;C</span>
        </TemperatureDetails>
      </div>
    </Container>
  );
};

export { TemperatureWidget };
