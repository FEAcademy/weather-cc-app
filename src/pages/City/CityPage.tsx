import Weather from 'api/services/Weather';
import { useParams } from 'react-router-dom';
import { PageContentContainer } from 'components/PageContentContainer';
import { WeatherAqiWidget } from 'components/WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from 'components/WeatherAqiWidget/WeatherAqiWidgetTestIds';
import { WeatherWidgetLoader } from 'components/WeatherWidget/WeatherWidgetLoader';
import { WidgetWrapper } from 'pages/Home/HomePage.styled';
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
      return (
        <>
          <WeatherWidgetLoader data-testid={WeatherAqiWidgetTestIds.Loader} />
        </>
      );
    }

    if (data) {
      return (
        <>
          <WeatherAqiWidget
            defraIndex={data.current.air_quality['gb-defra-index']}
            so2={data.current.air_quality.so2}
            co={data.current.air_quality.co}
            no2={data.current.air_quality.no2}
            o3={data.current.air_quality.o3}
            pm25={data.current.air_quality.pm2_5}
            pm10={data.current.air_quality.pm10}
          />
        </>
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
