import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
}

const WeatherAqiWidget = ({ defraIndex }: Props) => {
  return <WeatherWidget defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}></WeatherWidget>;
};

export { WeatherAqiWidget };
