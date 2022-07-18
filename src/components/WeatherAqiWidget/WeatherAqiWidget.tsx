import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
  no2: number;
}

const WeatherAqiWidget = ({ defraIndex, no2 }: Props) => {
  const roundedNo2 = Math.round(no2);
  const unit = ' \u00B5m/m3';

  return (
    <WeatherWidget defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}>
      <WeatherWidget.DataItem label={'NO2:'} value={roundedNo2 + unit} />
    </WeatherWidget>
  );
};

export { WeatherAqiWidget };
