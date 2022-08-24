import Overpass from 'api/services/Overpass';
import { CityWeatherShortcut, CityWeatherShortcutLoader } from 'components/CityWeatherShortcut';
import { Container, NearestCitiesTitle, ShortcutsWrapper } from './NearestCitiesWeatherWidget.styled';
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
      return data.map((city) => <CityWeatherShortcut key={city.id} cityName={city.tags.name} />);
    }

    return <></>;
  };

  return (
    <Container data-testid={NearestCitiesWeatherWidgetTestIds.Widget}>
      <NearestCitiesTitle>nearest</NearestCitiesTitle>
      <ShortcutsWrapper>{renderContent()}</ShortcutsWrapper>
    </Container>
  );
};

export { NearestCitiesWeatherWidget };
