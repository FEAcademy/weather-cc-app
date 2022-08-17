import { places } from 'mocks/mockData';
import { CityWeatherShortcut, CityWeatherShortcutLoader } from 'components/CityWeatherShortcut';
import { Container, NearestCitiesTitle, WidgetContainer } from './NearestCitiesWeatherWidget.styled';
import { NearestCitiesWeatherWidgetTestIds } from './NearestCitiesWeatherWidgetTestIds';

interface Props {
  loading: boolean;
  cityName: string | undefined;
}

const NearestCitiesWeatherWidget = ({ loading, cityName }: Props) => {
  //for now we haven't implemented getting nearest cities from api, so this is why I use mocked ones
  const nearestCities = [...places.elements, ...places.elements].map((city, id) => {
    return { ...city, id };
  });

  const renderContent = () => {
    if (loading) {
      return [...Array(6)].map((_, id) => <CityWeatherShortcutLoader key={id} />);
    }

    if (cityName) {
      return nearestCities.map((city) => <CityWeatherShortcut key={city.id} cityName={city.tags.name} />);
    }

    return <></>;
  };

  return (
    <Container data-testid={NearestCitiesWeatherWidgetTestIds.Widget}>
      <NearestCitiesTitle>nearest</NearestCitiesTitle>
      <WidgetContainer>{renderContent()}</WidgetContainer>
    </Container>
  );
};

export { NearestCitiesWeatherWidget };
