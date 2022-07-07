import { Container, WeatherDescription, InformationWrapper , Icon} from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  icon: string;
  description: string;
}

const TemperatureWidget = ({ icon, description }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <InformationWrapper>
        {icon && <Icon src={icon} alt="Weather widget icon" />}
        <WeatherDescription>{description}</WeatherDescription>
      </InformationWrapper>
    </Container>
  );
};

export { TemperatureWidget };
