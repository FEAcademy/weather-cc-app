import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
  so2: number;
}

const WeatherAqiWidget = ({ defraIndex, so2 }: Props) => {
  const roundedSo2 = Math.round(so2);

  return (
    <WeatherWidget defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}>
      <WeatherWidget.DataItem label="SO2:" value={roundedSo2 + ' μg/m3'} />
    </WeatherWidget>
  );
};

export { WeatherAqiWidget };
