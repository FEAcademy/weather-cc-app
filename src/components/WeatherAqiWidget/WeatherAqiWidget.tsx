import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
  pm2_5: number;
}

const WeatherAqiWidget = ({ defraIndex, pm2_5 }: Props) => {
  const roundedPm2_5 = Math.round(pm2_5);

  return (
    <WeatherWidget defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}>
      <WeatherWidget.DataItem label={'PM 2.5:'} value={roundedPm2_5 + ' \u00b5g/m3'} />
    </WeatherWidget>
  );
};

export { WeatherAqiWidget };
