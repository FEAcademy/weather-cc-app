import Weather from 'api/services/Weather';
import { useParams } from 'react-router-dom';
import { PageContentContainer } from 'components/PageContentContainer';
import { WidgetWrapper } from 'components/WidgetWrapper';
import { NearestCitiesTitle } from './CityPage.styled';
import { CityPageTestIds } from './CityPageTestIds';
import { CityNameWidget } from './components/CityNameWidget';
import { NearestCitiesWeatherWidget } from './components/NearestCitiesWeatherWidget';

type Params = {
  city: string;
};

const CityPage = () => {
  const { city } = useParams() as Params;
  const { data, isLoading } = Weather.useLocation(city);

  return (
    <PageContentContainer data-testid={CityPageTestIds.Container}>
      <CityNameWidget loading={isLoading} cityName={data !== undefined ? data.location.name : undefined} />
      <WidgetWrapper data={data} isLoading={isLoading} data-testid={CityPageTestIds.Widgets} />
      <NearestCitiesTitle>nearest</NearestCitiesTitle>
      <NearestCitiesWeatherWidget loading={isLoading} cityName={data !== undefined ? data.location.name : undefined} />
    </PageContentContainer>
  );
};

export { CityPage };
