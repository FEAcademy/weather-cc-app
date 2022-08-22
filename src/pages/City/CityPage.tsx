import Weather from 'api/services/Weather';
import { Paths } from 'enums/Paths';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { convertSpecialCharacters } from 'utils/convertSpecialCharacters';
import { serializeCoordinates } from 'utils/serializeCoordinates';
import { PageContentContainer } from 'components/PageContentContainer';
import { WidgetWrapper } from 'components/WidgetWrapper';
import { CityPageTestIds } from './CityPageTestIds';
import { CityNameWidget } from './components/CityNameWidget';
import { NearestCitiesWeatherWidget } from './components/NearestCitiesWeatherWidget';

type Params = {
  city: string;
};

const CityPage = () => {
  const navigate = useNavigate();
  const { city } = useParams() as Params;
  const normalizedCity = useMemo(() => convertSpecialCharacters(city), [city]);

  const { data, isLoading, isError } = Weather.useLocation(normalizedCity);

  useEffect(() => {
    if (isError) {
      navigate(Paths.Map);
    }
  }, [isError, navigate]);

  const cityName = normalizedCity.split(',')[0].charAt(0).toUpperCase() + normalizedCity.split(',')[0].slice(1);
  const coordinates = data && serializeCoordinates({ latitude: data?.location.lat, longitude: data?.location.lon });

  return (
    <PageContentContainer data-testid={CityPageTestIds.Container}>
      <CityNameWidget loading={isLoading} cityName={data?.location.name} />
      <WidgetWrapper data={data} isLoading={isLoading} data-testid={CityPageTestIds.Widgets} />
      <NearestCitiesWeatherWidget cityName={cityName} coordinates={coordinates} />
    </PageContentContainer>
  );
};

export { CityPage };
