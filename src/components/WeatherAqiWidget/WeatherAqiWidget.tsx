import { Container } from './WeatherAqiWidget.styled';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
}

const WeatherAqiWidget = ({ defraIndex = 1 }: Props) => {
  return <Container defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}></Container>;
};

export { WeatherAqiWidget };
