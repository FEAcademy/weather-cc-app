import { IconTypes } from 'enums/IconTypes';
import { CitiesWeatherWidget } from 'components/CitiesWeatherWidget';
import { CityWeatherShortcut } from 'components/CityWeatherShortcut';
import { FavoritesCitiesWeatherWidgetTestIds } from './FavoritesCitiesWeatherWidgetTestIds';

const FavoritesCitiesWeatherWidget = () => {
  const favoriteCities: string[] = [];

  return (
    <CitiesWeatherWidget data-testid={FavoritesCitiesWeatherWidgetTestIds.Container}>
      <CitiesWeatherWidget.Title>favorites</CitiesWeatherWidget.Title>
      <CitiesWeatherWidget.ShortcutsWrapper>
        {favoriteCities.map((city) => (
          <CityWeatherShortcut key={city} cityName={city} iconType={IconTypes.Heart} />
        ))}
      </CitiesWeatherWidget.ShortcutsWrapper>
    </CitiesWeatherWidget>
  );
};

export { FavoritesCitiesWeatherWidget };
