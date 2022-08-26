import { useFavorites } from 'context/favorites/FavoritesProvider';
import { IconTypes } from 'enums/IconTypes';
import { CitiesWeatherWidget } from 'components/CitiesWeatherWidget';
import { CityWeatherShortcut } from 'components/CityWeatherShortcut';
import { FavoritesCitiesWeatherWidgetTestIds } from './FavoritesCitiesWeatherWidgetTestIds';

const FavoritesCitiesWeatherWidget = () => {
  const { state } = useFavorites();

  return (
    <CitiesWeatherWidget data-testid={FavoritesCitiesWeatherWidgetTestIds.Container}>
      {state.favorites.length > 0 && (
        <>
          <CitiesWeatherWidget.Title>favorites</CitiesWeatherWidget.Title>
          <CitiesWeatherWidget.ShortcutsWrapper>
            {state.favorites.map((city) => (
              <CityWeatherShortcut key={city} cityName={city} iconType={IconTypes.Heart} />
            ))}
          </CitiesWeatherWidget.ShortcutsWrapper>
        </>
      )}
    </CitiesWeatherWidget>
  );
};

export { FavoritesCitiesWeatherWidget };
