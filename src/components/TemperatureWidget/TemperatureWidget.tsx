import { Container, Icon, Temperature } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  icon: string;
  currentTemperature: number;
}

const TemperatureWidget = ({ currentTemperature, icon }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <Icon src={icon} alt="Weather widget icon" />
      <div>
        <Temperature data-testid={TemperatureWidgetTestIds.Temperature}>
          {currentTemperature}
          <span>&deg;C</span>
        </Temperature>
      </div>
    </Container>
  );
};

export { TemperatureWidget };
