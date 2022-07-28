import Weather from 'api/services/Weather';
import { useParams } from 'react-router-dom';
import { PageContentContainer } from 'components/PageContentContainer';
import { WeatherInfoWidget } from 'components/WeatherInfoWidget';
import { WeatherInfoWidgetTestIds } from 'components/WeatherInfoWidget/WeatherInfoWidgetTestIds';
import { WeatherWidgetLoader } from 'components/WeatherWidget/WeatherWidgetLoader';
import { WidgetWrapper } from 'components/WidgetWrapper';
import { CityName } from './CityPage.styled';
import { CityPageTestIds } from './CityPageTestIds';

type Params = {
  city: string;
};

const CityPage = () => {
  const { city } = useParams() as Params;
  const { data, isLoading } = Weather.useCity(city);

  const renderContent = () => {
    if (isLoading) {
      return <WeatherWidgetLoader data-testid={WeatherInfoWidgetTestIds.Loader} />;
    }

    if (data) {
      return (
        <WeatherInfoWidget
          cloud={data.current.cloud}
          precip={data.current.precip_mm}
          humidity={data.current.humidity}
          pressure={data.current.pressure_mb}
          windSpeed={data.current.wind_kph}
          gust={data.current.gust_kph}
        />
      );
    }
  };

  return (
    <PageContentContainer data-testid={CityPageTestIds.Container}>
      {data && <CityName>{data.location.name}</CityName>}
      <WidgetWrapper data-testid={CityPageTestIds.Widgets}>{renderContent()}</WidgetWrapper>
    </PageContentContainer>
  );
};

export { CityPage };
