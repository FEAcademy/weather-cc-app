import React from 'react';
import { Container } from './TemperatureBox.styled';
import { TemperatureBoxTestIds } from './TemperatureBoxTestIds';

const TemperatureBox = () => {
  return <Container data-testid={TemperatureBoxTestIds.TemperatureBox}></Container>;
};

export { TemperatureBox };
