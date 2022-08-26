import { IconTypes } from 'enums/IconTypes';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { CitiesWeatherWidget } from 'components/CitiesWeatherWidget';
import { CityWeatherShortcut } from 'components/CityWeatherShortcut';
import { FavoritesCitiesWeatherWidgetTestIds } from './FavoritesCitiesWeatherWidgetTestIds';

const FavoritesCitiesWeatherWidget = () => {
  const [favoriteCities] = useLocalStorage<string[]>('favorites');

  return (
    <CitiesWeatherWidget data-testid={FavoritesCitiesWeatherWidgetTestIds.Container}>
      <CitiesWeatherWidget.Title>favorites</CitiesWeatherWidget.Title>
      <CitiesWeatherWidget.ShortcutsWrapper>
        {favoriteCities?.map((city) => (
          <CityWeatherShortcut key={city} cityName={city} iconType={IconTypes.Heart} />
        ))}
      </CitiesWeatherWidget.ShortcutsWrapper>
    </CitiesWeatherWidget>
  );
};

export { FavoritesCitiesWeatherWidget };
