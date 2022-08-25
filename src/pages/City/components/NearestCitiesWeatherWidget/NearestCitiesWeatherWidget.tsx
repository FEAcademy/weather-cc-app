import Overpass from 'api/services/Overpass';
import { ButtonTypes } from 'enums/ButtonTypes';
import { CitiesWeatherWidget } from 'components/CitiesWeatherWidget';
import { CityWeatherShortcut, CityWeatherShortcutLoader } from 'components/CityWeatherShortcut';
import { NearestCitiesWeatherWidgetTestIds } from './NearestCitiesWeatherWidgetTestIds';

interface Props {
  cityName: string;
  coordinates: string | undefined;
}

const NearestCitiesWeatherWidget = ({ cityName, coordinates }: Props) => {
  const { data, isLoading } = Overpass.useNearestPlaces(cityName, coordinates);
  const renderContent = () => {
    if (isLoading) {
      return [...Array(6)].map((_, id) => <CityWeatherShortcutLoader key={id} />);
    }

    if (data) {
      return data.map((city) => (
        <CityWeatherShortcut key={city.id} cityName={city.tags.name} type={ButtonTypes.Heart} />
      ));
    }

    return <></>;
  };

  return (
    <CitiesWeatherWidget data-testid={NearestCitiesWeatherWidgetTestIds.Widget}>
      <CitiesWeatherWidget.Title>nearest</CitiesWeatherWidget.Title>
      <CitiesWeatherWidget.ShortcutsWrapper>{renderContent()}</CitiesWeatherWidget.ShortcutsWrapper>
    </CitiesWeatherWidget>
  );
};

export { NearestCitiesWeatherWidget };
