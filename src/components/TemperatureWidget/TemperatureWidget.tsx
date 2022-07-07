import { WeatherSuccessResponse } from 'mocks/mockData';
import { Container, Icon } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

const TemperatureWidget = ({ data }: { data: WeatherSuccessResponse }) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <Icon src={data.current.condition.icon} alt="Weather icon" />
    </Container>
  );
};

export { TemperatureWidget };
