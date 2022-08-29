import { useFavorites } from 'context/favorites/FavoritesProvider';
import { Icons } from 'enums/Icons';
import { CitiesWeatherWidget } from 'components/CitiesWeatherWidget';
import { CityWeatherShortcut } from 'components/CityWeatherShortcut';
import { FavoritesCitiesWeatherWidgetTestIds } from './FavoritesCitiesWeatherWidgetTestIds';

const FavoritesCitiesWeatherWidget = () => {
  const { state } = useFavorites();

  const renderContent = () => {
    if (state.favorites.length > 0)
      return (
        <>
          <CitiesWeatherWidget.Title>favorites</CitiesWeatherWidget.Title>
          <CitiesWeatherWidget.ShortcutsWrapper>
            {state.favorites.map((city) => (
              <CityWeatherShortcut key={city} cityName={city} icons={Icons.Heart} />
            ))}
          </CitiesWeatherWidget.ShortcutsWrapper>
        </>
      );
  };

  return (
    <CitiesWeatherWidget data-testid={FavoritesCitiesWeatherWidgetTestIds.Container}>
      {renderContent()}
    </CitiesWeatherWidget>
  );
};

export { FavoritesCitiesWeatherWidget };
