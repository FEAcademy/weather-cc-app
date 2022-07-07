import React, { PropsWithChildren } from 'react';
import { Container } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

const TemperatureWidget = ({children} : PropsWithChildren) => {
  return <Container data-testid={TemperatureWidgetTestIds.Container}>{children}</Container>;
};

export { TemperatureWidget };
