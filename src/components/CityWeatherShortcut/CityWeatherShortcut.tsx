import { weatherDataInCitySuccessResponse } from 'mocks/mockData';
import { Container, Icon, Temperature, Value, TemperatureSign, City } from './CityWeatherShortcut.styled';
import { CityWeatherShortcutTestIds } from './CityWeatherShortcutTestIds';
import { CityWeatherShortcutLoader } from './components/CityWeatherShortcutLoader';

type Props = {
  cityName: string;
};

const CityWeatherShortcut = ({ cityName }: Props) => {
  const data = weatherDataInCitySuccessResponse;
  const isLoading = false;

  if (isLoading) {
    return <CityWeatherShortcutLoader />;
  }

  if (data) {
    const { condition, temp_c } = data.current;
    const roundedTemperature = Math.round(temp_c);

    return (
      <Container data-testid={CityWeatherShortcutTestIds.Widget}>
        <Icon src={condition.icon} alt="weather image" />
        <Temperature>
          <Value>{roundedTemperature}</Value>
          <TemperatureSign>&deg;C</TemperatureSign>
        </Temperature>
        <City>{cityName}</City>
      </Container>
    );
  }

  return <></>;
};

export { CityWeatherShortcut };
