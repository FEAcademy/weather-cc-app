import React from 'react';
import { Container } from './TemperatureBox.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

const TemperatureWidget = () => {
  return <Container data-testid={TemperatureWidgetTestIds.Container}></Container>;
};

export { TemperatureWidget };
