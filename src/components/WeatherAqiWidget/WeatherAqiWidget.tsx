import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
  pm25: number;
}

const WeatherAqiWidget = ({ defraIndex, pm25 }: Props) => {
  const roundedPm25 = Math.round(pm25);
  const unit = ' µg/m3';

  return (
    <WeatherWidget defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}>
      <WeatherWidget.DataItem label="PM 2.5:" value={roundedPm25 + unit} />
    </WeatherWidget>
  );
};

export { WeatherAqiWidget };
