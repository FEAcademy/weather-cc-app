import Weather from 'api/services/Weather';
import { useState } from 'react';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { WeatherDescription } from 'components/TemperatureWidget/WeatherDescription';
import { WidgetWrapper, InformationWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data } = Weather.useCity(cityName);

  return (
    <div data-testid={HomePageTestIds.HomePage}>
      <WidgetWrapper>
        <TemperatureWidget>
          <InformationWrapper>
            <WeatherDescription description={data?.current.condition.text!} />
          </InformationWrapper>
        </TemperatureWidget>
      </WidgetWrapper>
    </div>
  );
};

export { HomePage };
