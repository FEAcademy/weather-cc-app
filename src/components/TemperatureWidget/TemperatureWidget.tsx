import React from 'react';
import { Container, TemperatureDetails } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  feelslike_c: number;
}

const TemperatureWidget = ({ feelslike_c }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
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
