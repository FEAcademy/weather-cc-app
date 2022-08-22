import Weather from 'api/services/Weather';
import { Paths } from 'enums/Paths';
import { useEffect, useMemo } from 'react';
import { NavigateOptions, useLocation, useNavigate, useParams } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { city } = useParams() as Params;
  const normalizedCity = useMemo(() => convertSpecialCharacters(city), [city]);

  const { data, isLoading, isError } = Weather.useLocation(normalizedCity);
  const { state }: NavigateOptions = useLocation();

  useEffect(() => {
    if (isError) {
      navigate(Paths.Map);
    }
  }, [isError, navigate]);

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
