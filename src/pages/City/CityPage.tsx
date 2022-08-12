import Weather from 'api/services/Weather';
import { places } from 'mocks/mockData';
import { NavigateOptions, useLocation, useParams } from 'react-router-dom';
import { PageContentContainer } from 'components/PageContentContainer';
import { WidgetWrapper } from 'components/WidgetWrapper';
import { CityName, ShortcutsTitle } from './CityPage.styled';
import { CityPageTestIds } from './CityPageTestIds';
import { CityNameLoader } from './components/CityNameLoader';
import { LoadersWidget } from './components/LoadersWidget';
import { NearestCitiesWeatherWidget } from './components/NearestCitiesWeatherWidget';

let TEMP_NEAREST_CITIES = [...places.elements, ...places.elements];
TEMP_NEAREST_CITIES = TEMP_NEAREST_CITIES.map((city, index) => {
  return { ...city, id: city.id + index };
});
const IS_LOADING_NEAREST_CITIES_STATE_TEMP = false;

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
      return <CityName>{state?.cityName || data.location.name}</CityName>;
    }
  };

  const renderContent = () => {
    if (IS_LOADING_NEAREST_CITIES_STATE_TEMP) {
      return <LoadersWidget />;
    }

    if (!IS_LOADING_NEAREST_CITIES_STATE_TEMP && TEMP_NEAREST_CITIES) {
      return <NearestCitiesWeatherWidget citiesData={TEMP_NEAREST_CITIES} />;
    }
  };

  return (
    <PageContentContainer data-testid={CityPageTestIds.Container}>
      {renderCityName()}
      <WidgetWrapper data={data} isLoading={isLoading} data-testid={CityPageTestIds.Widgets} />
      <ShortcutsTitle>nearest</ShortcutsTitle>
      {renderContent()}
    </PageContentContainer>
  );
};

export { CityPage };
