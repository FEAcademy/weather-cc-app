import { CityWeatherShortcut } from 'components/CityWeatherShortcut';
import { Place } from 'models/Place';
import { Container } from './NearestCitiesWeatherWidget.styled';
import { NearestCitiesWeatherWidgetTestIds } from './NearestCitiesWeatherWidgetTestIds';

type Props = {
  citiesData: Place[];
};

const NearestCitiesWeatherWidget = ({ citiesData }: Props) => {
  return (
    <Container data-testid={NearestCitiesWeatherWidgetTestIds.Widget}>
      {citiesData.map((data, index) => {
        return <CityWeatherShortcut cityData={data} key={index} />;
      })}
    </Container>
  );
};

export { NearestCitiesWeatherWidget };
