import { Container } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

const TemperatureWidget = () => {
  return <Container data-testid={TemperatureWidgetTestIds.container} />;
};

export { TemperatureWidget };
