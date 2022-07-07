import { Container, WeatherDescription, InformationWrapper } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  description: string;
}

const TemperatureWidget = ({ description }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      <InformationWrapper>
        <WeatherDescription>{description}</WeatherDescription>
      </InformationWrapper>
    </Container>
  );
};

export { TemperatureWidget };
