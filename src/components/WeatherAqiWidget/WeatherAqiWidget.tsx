import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
  o3: number;
}

const WeatherAqiWidget = ({ defraIndex, o3 }: Props) => {
  const roundedO3 = Math.round(o3);

  const unit = ' µg/m3';

  return (
    <WeatherWidget defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}>
      <WeatherWidget.DataItem label="O3:" value={roundedO3 + unit} />
    </WeatherWidget>
  );
};

export { WeatherAqiWidget };
