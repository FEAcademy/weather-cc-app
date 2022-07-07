import { Container, Icon } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

const TemperatureWidget = ({ icon }: { icon: string }) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <Icon src={icon} alt="Weather icon" />
    </Container>
  );
};

export { TemperatureWidget };
