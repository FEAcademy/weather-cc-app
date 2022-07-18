import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
  co: number;
}

const WeatherAqiWidget = ({ defraIndex, co }: Props) => {
  const unit = ' µg/m3';
  const roundedCo = Math.round(co);

  return (
    <WeatherWidget defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}>
      <WeatherWidget.DataItem label="CO" value={roundedCo + unit} />
    </WeatherWidget>
  );
};

export { WeatherAqiWidget };
