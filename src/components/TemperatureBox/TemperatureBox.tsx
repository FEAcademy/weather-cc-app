import React from 'react';
import { Container } from './TemperatureBox.styled';
import { TemperatureBoxTestIds } from './TemperatureBoxTestIds';

const TemperatureBox = () => {
  return <Container data-testid={TemperatureBoxTestIds.Container}></Container>;
};

export { TemperatureBox };
