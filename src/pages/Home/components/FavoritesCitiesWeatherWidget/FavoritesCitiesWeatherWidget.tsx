import { CitiesWeatherWidget } from 'components/CitiesWeatherWidget';
import { CityWeatherShortcut } from 'components/CityWeatherShortcut';
import { FavoritesCitiesWeatherWidgetTestIds } from './FavoritesCitiesWeatherWidgetTestIds';

const FavoritesCitiesWeatherWidget = () => {
  const favouriteCities: string[] = [];

  return (
    <CitiesWeatherWidget data-testid={FavoritesCitiesWeatherWidgetTestIds.Container}>
      <CitiesWeatherWidget.Title>favorites</CitiesWeatherWidget.Title>
      <CitiesWeatherWidget.ShortcutsWrapper>
        {favouriteCities.map((city) => (
          <CityWeatherShortcut key={city} cityName={city} />
        ))}
      </CitiesWeatherWidget.ShortcutsWrapper>
    </CitiesWeatherWidget>
  );
};

export { FavoritesCitiesWeatherWidget };
