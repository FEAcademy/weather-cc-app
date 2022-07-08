import React from 'react';
import { Container, Icon, TemperatureDetails, Temperature } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  feelslikeTemperature: number;
  icon: string;
  currentTemperature: number;
}

const TemperatureWidget = ({ currentTemperature, feelslikeTemperature, icon }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <Icon src={icon} alt="Weather widget icon" />
      <div>
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
