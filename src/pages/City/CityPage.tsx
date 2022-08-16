import Overpass from 'api/services/Overpass';
import Weather from 'api/services/Weather';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { convertSpecialCharacters } from 'utils/convertSpecialCharacters';
import { serializeCoordinates } from 'utils/serializeCoordinates';
import { PageContentContainer } from 'components/PageContentContainer';
import { WidgetWrapper } from 'components/WidgetWrapper';
import { CityName } from './CityPage.styled';
import { CityPageTestIds } from './CityPageTestIds';
import { CityNameLoader } from './components/CityNameLoader';

type Params = {
  city: string;
};

const CityPage = () => {
  const { city } = useParams() as Params;
  const normalizedCity = useMemo(() => convertSpecialCharacters(city), [city]);

  const { data, isLoading } = Weather.useLocation(normalizedCity);

  const cityName = city.split(',')[0].charAt(0).toUpperCase() + city.split(',')[0].slice(1);
  console.log(cityName);
  const coordinates = data && serializeCoordinates({ latitude: data?.location.lat, longitude: data?.location.lon });

  const { data: nearestCities } = Overpass.useNearestPlaces(cityName, coordinates);
  console.log(nearestCities);

  const renderCityName = () => {
    if (isLoading) {
      return <CityNameLoader />;
    }
    if (data) {
      return <CityName>{data.location.name}</CityName>;
    }
  };

  return (
    <PageContentContainer data-testid={CityPageTestIds.Container}>
      {renderCityName()}
      <WidgetWrapper data={data} isLoading={isLoading} data-testid={CityPageTestIds.Widgets} />
    </PageContentContainer>
  );
};

export { CityPage };
