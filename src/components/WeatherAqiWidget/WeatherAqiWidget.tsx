import WeatherWidget from 'components/WeatherWidgetInfo';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
}

const WeatherAqiWidget = ({ defraIndex }: Props) => {
  return (
    <WeatherWidget.Container
      defraIndex={defraIndex}
      data-testid={WeatherAqiWidgetTestIds.Container}
    ></WeatherWidget.Container>
  );
};

export { WeatherAqiWidget };
