import Overpass from 'api/services/Overpass';
import Weather from 'api/services/Weather';
import { useMemo } from 'react';
import { NavigateOptions, useLocation, useParams } from 'react-router-dom';
import { convertSpecialCharacters } from 'utils/convertSpecialCharacters';
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
  const normalizedCity = useMemo(()=> 
    convertSpecialCharacters(city), [city]
  );
  const { data, isLoading } = Weather.useLocation(normalizedCity);
  const { state }: NavigateOptions = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: nearestCities } = Overpass.useNearestPlaces(city, state?.cityName);

  const renderCityName = () => {
    if (isLoading) {
      return <CityNameLoader />;
    }
    if (data) {
      return <CityName>{state?.cityName || data.location.name}</CityName>;
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
