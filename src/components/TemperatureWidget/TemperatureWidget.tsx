import { Container, Icon, WeatherDescription, Temperature, TemperatureDetails } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  feelslikeTemperature: number;
  icon: string;
  currentTemperature: number;
  description: string;
}

const TemperatureWidget = ({ icon, description, currentTemperature, feelslikeTemperature }: Props) => {
  const roundedCurrentTemperature = Math.round(currentTemperature);
  const roundedFeelslikeTemperature = Math.round(feelslikeTemperature);

  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <Icon src={icon} alt="Weather widget icon" />
      <div>
        <WeatherDescription>{description}</WeatherDescription>
        <Temperature data-testid={TemperatureWidgetTestIds.Temperature}>
          {roundedCurrentTemperature}
          <span>&deg;C</span>
        </Temperature>
        <TemperatureDetails>
          feels like {roundedFeelslikeTemperature}
          <span>&deg;C</span>
        </TemperatureDetails>
      </div>
    </Container>
  );
};

export { TemperatureWidget };
