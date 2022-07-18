import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
  pm10: number;
}

const WeatherAqiWidget = ({ defraIndex, pm10 }: Props) => {
  const roundedPm10 = Math.round(pm10);
  return (
    <WeatherWidget defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}>
      <WeatherWidget.DataItem label={'PM 10:'} value={roundedPm10 + ' µg/m3'} />
    </WeatherWidget>
  );
};

export { WeatherAqiWidget };
