import { Container, Icon } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  icon: string;
}

const TemperatureWidget = ({ icon }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <Icon src={icon} alt="Weather icon" />
    </Container>
  );
};

export { TemperatureWidget };
