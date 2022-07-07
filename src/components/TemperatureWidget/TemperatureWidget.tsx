import React from 'react';
import { Container, Icon, TemperatureDetails } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  feelslike_c: number;
  icon: string;
}

const TemperatureWidget = ({ feelslike_c, icon }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      {icon && <Icon src={icon} alt="Weather widget icon" />}
      <div>
        <TemperatureDetails>
          feels like {feelslike_c}
          <span>&deg;C</span>
        </TemperatureDetails>
      </div>
    </Container>
  );
};

export { TemperatureWidget };
