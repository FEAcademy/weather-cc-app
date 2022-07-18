import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
  co: number;
  pm25: number;
  pm10: number;
}

const WeatherAqiWidget = ({ defraIndex, co, pm25, pm10 }: Props) => {
  const unit = ' µg/m3';
  const roundedCo = Math.round(co);
  const roundedPm25 = Math.round(pm25);
  const roundedPm10 = Math.round(pm10);

  return (
    <WeatherWidget defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}>
      <WeatherWidget.DataItem label="CO:" value={roundedCo + unit} />
      <WeatherWidget.DataItem label="PM 2.5:" value={roundedPm25 + unit} />
      <WeatherWidget.DataItem label="PM 10:" value={roundedPm10 + unit} />
    </WeatherWidget>
  );
};

export { WeatherAqiWidget };
