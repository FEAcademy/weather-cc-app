import Weather from 'api/services/Weather';
import { weatherDataInCity } from 'mocks/mockData';
import { NavigateOptions, useLocation, useParams } from 'react-router-dom';
import { PageContentContainer } from 'components/PageContentContainer';
import { WidgetWrapper } from 'components/WidgetWrapper';
import { Weather as IWeather } from 'models/Weather';
import { CityName } from './CityPage.styled';
import { CityPageTestIds } from './CityPageTestIds';
import { CityNameLoader } from './components/CityNameLoader';
import { ShortcutsWrapper } from './components/ShortcutsWrapper';

type Params = {
  city: string;
};

// this is temporaty solution (flag and DUMMY_DATA). will be changed when task 77 and 78 are done
// TODO: add tests in CityPage after adding data fetching from API's

const flag = true;

const DUMMY_DATA: IWeather[] = [
  weatherDataInCity,
  weatherDataInCity,
  weatherDataInCity,
  weatherDataInCity,
  weatherDataInCity,
  weatherDataInCity,
];

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

  return (
    <PageContentContainer data-testid={CityPageTestIds.Container}>
      {renderCityName()}
      <WidgetWrapper data={data} isLoading={isLoading} data-testid={CityPageTestIds.Widgets} />
      <ShortcutsWrapper data={DUMMY_DATA} isLoading={flag} />
    </PageContentContainer>
  );
};

export { CityPage };
