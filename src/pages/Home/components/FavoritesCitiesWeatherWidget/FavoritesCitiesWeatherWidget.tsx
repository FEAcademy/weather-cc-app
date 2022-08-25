import { CitiesWeatherWidget } from 'components/CitiesWeatherWidget';
import { FavoritesCitiesWeatherWidgetTestIds } from './FavoritesCitiesWeatherWidgetTestIds';

const FavoritesCitiesWeatherWidget = () => {
  return (
    <CitiesWeatherWidget data-testid={FavoritesCitiesWeatherWidgetTestIds.Container}>
      <CitiesWeatherWidget.Title name="favorites" />
      <CitiesWeatherWidget.ShortcutsWrapper />
    </CitiesWeatherWidget>
  );
};

export { FavoritesCitiesWeatherWidget };
