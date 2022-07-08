import React from 'react';
import { Container, Icon, TemperatureDetails } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  feelslikeTemperature: number;
  icon: string;
}

const TemperatureWidget = ({ feelslikeTemperature, icon }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <Icon src={icon} alt="Weather widget icon" />
      <div>
        <TemperatureDetails>
          feels like {feelslikeTemperature}
          <span>&deg;C</span>
        </TemperatureDetails>
      </div>
    </Container>
  );
};

export { TemperatureWidget };
