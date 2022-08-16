import { CityWeatherShortcut } from 'components/CityWeatherShortcut';
import { CityWeatherShortcutLoader } from 'components/CityWeatherShortcut/components/CityWeatherShortcutLoader';
import { Place } from 'models/Place';
import { Container } from './NearestCitiesWeatherWidget.styled';
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

  return <Container data-testid={NearestCitiesWeatherWidgetTestIds.Widget}>{renderContent()}</Container>;
};

export { NearestCitiesWeatherWidget };
