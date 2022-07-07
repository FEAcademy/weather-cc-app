import { Container, WeatherDescription , Icon} from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  icon: string;
  description: string;
}

const TemperatureWidget = ({ icon, description }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      {icon && <Icon src={icon} alt="Weather widget icon" />}
      <div>
        <WeatherDescription>{description}</WeatherDescription>
      </div>
    </Container>
  );
};

export { TemperatureWidget };
