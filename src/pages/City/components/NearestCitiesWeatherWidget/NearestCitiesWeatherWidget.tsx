import { CityWeatherShortcut, CityWeatherShortcutLoader } from 'components/CityWeatherShortcut';
import { Place } from 'models/Place';
import { Container, NearestCitiesTitle } from './NearestCitiesWeatherWidget.styled';
import { NearestCitiesWeatherWidgetTestIds } from './NearestCitiesWeatherWidgetTestIds';

interface Props {
  loading: boolean;
  cityName: string | undefined;
}

const NearestCitiesWeatherWidget = ({ loading, cityName }: Props) => {
  const renderContent = () => {
    if (loading) {
      return [...Array(6)].map((_, id) => <CityWeatherShortcutLoader key={id} />);
    }

    if (cityName) {
      return ([] as Place[]).map((city) => <CityWeatherShortcut key={city.id} cityName={city.tags.name} />);
    }

    return <></>;
  };

  return (
    <Container data-testid={NearestCitiesWeatherWidgetTestIds.Widget}>
      <NearestCitiesTitle>nearest</NearestCitiesTitle>
      {renderContent()}
    </Container>
  );
};

export { NearestCitiesWeatherWidget };
