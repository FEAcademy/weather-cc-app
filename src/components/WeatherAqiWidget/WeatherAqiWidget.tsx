import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
  pm2_5: number;
}

const WeatherAqiWidget = ({ defraIndex, pm2_5 }: Props) => {
  const roundedPm2_5 = Math.round(pm2_5);
  const unit = ' µg/m3';

  return (
    <WeatherWidget defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}>
      <WeatherWidget.DataItem label="PM 2.5:" value={roundedPm2_5 + unit} />
    </WeatherWidget>
  );
};

export { WeatherAqiWidget };
