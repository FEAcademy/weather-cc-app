import Weather from 'api/services/Weather';
import { NavigateOptions, useLocation, useParams } from 'react-router-dom';
import { FavoritesButton } from 'components/FavoritesButton';
import { PageContentContainer } from 'components/PageContentContainer';
import { WidgetWrapper } from 'components/WidgetWrapper';
import { CityName, CityNameWrapper } from './CityPage.styled';
import { CityPageTestIds } from './CityPageTestIds';
import { CityNameLoader } from './components/CityNameLoader';

type Params = {
  city: string;
};

const CityPage = () => {
  const { city } = useParams() as Params;
  const { data, isLoading } = Weather.useLocation(city);
  const { state }: NavigateOptions = useLocation();

  const renderCityName = () => {
    if (isLoading) {
      return <CityNameLoader />;
    }
    if (data) {
      return (
        <CityNameWrapper>
          <CityName>{state?.cityName || data.location.name}</CityName>
          <FavoritesButton cityName={data?.location.name} size={20} />
        </CityNameWrapper>
      );
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
