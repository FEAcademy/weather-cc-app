import { Container, Temperature } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  temp_c: number;
}

const TemperatureWidget = ({ temp_c }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <Temperature data-testid={TemperatureWidgetTestIds.Temperature}>
        {temp_c}
        <span>&deg;C</span>
      </Temperature>
    </Container>
  );
};

export { TemperatureWidget };
