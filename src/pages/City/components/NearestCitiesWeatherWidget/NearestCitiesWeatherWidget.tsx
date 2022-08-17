import { CityWeatherShortcut, CityWeatherShortcutLoader } from 'components/CityWeatherShortcut';
import { Place } from 'models/Place';
import { Container, NearestCitiesTitle, WidgetContainer } from './NearestCitiesWeatherWidget.styled';
import { NearestCitiesWeatherWidgetTestIds } from './NearestCitiesWeatherWidgetTestIds';

interface Props {
  loading: boolean;
  cityName: string | undefined;
}

const NearestCitiesWeatherWidget = ({ loading, cityName }: Props) => {
  const renderContent = () => {
    if (loading) {
      return (
        <WidgetContainer>
          {[...Array(6)].map((_, id) => (
            <CityWeatherShortcutLoader key={id} />
          ))}
        </WidgetContainer>
      );
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
