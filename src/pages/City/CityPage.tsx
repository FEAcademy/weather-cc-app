import Weather from 'api/services/Weather';
import { useParams } from 'react-router-dom';
import { PageContentContainer } from 'components/PageContentContainer';
import { TemperatureWidget, TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { TemperatureWidgetLoader } from 'components/TemperatureWidget/TemperatureWidgetLoader';
import { CityName, WidgetWrapper } from './CityPage.styled';
import { CityPageTestIds } from './CityPageTestIds';

type Params = {
  city: string;
};

const CityPage = () => {
  const { city } = useParams() as Params;
  const { isLoading, data } = Weather.useCity(city);

  const renderContent = () => {
    if (isLoading) {
      return <TemperatureWidgetLoader data-testid={TemperatureWidgetTestIds.Loader} />;
    }
    if (data) {
      return (
        <TemperatureWidget
          icon={data.current.condition.icon}
          description={data.current.condition.text}
          currentTemperature={data.current.temp_c}
          feelslikeTemperature={data.current.feelslike_c}
        />
      );
    }
  };

  return (
    <PageContentContainer data-testid={CityPageTestIds.Container}>
      {data && <CityName>{data.location.name}</CityName>}
      <WidgetWrapper>{renderContent()}</WidgetWrapper>
    </PageContentContainer>
  );
};

export { CityPage };
