import { Container, Icon, Temperature, WeatherDescription } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  icon: string;
  currentTemperature: number;
  description: string;
}

const TemperatureWidget = ({ currentTemperature, icon, description }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <Icon src={icon} alt="Weather widget icon" />
      <div>
        <Temperature data-testid={TemperatureWidgetTestIds.Temperature}>
          {currentTemperature}
          <span>&deg;C</span>
        </Temperature>
        <WeatherDescription>{description}</WeatherDescription>
      </div>
    </Container>
  );
};

export { TemperatureWidget };
