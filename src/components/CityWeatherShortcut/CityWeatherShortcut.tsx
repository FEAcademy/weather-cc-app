import { weatherDataInCitySuccessResponse } from 'mocks/mockData';
import { Container, Icon, Temperature, Value, TemperatureSign, City } from './CityWeatherShortcut.styled';
import { CityWeatherShortcutTestIds } from './CityWeatherShortcutTestIds';
import { CityWeatherShortcutLoader } from './components/CityWeatherShortcutLoader';

type Props = {
  cityName: string;
};

const data = weatherDataInCitySuccessResponse;
const isLoading = false;

const CityWeatherShortcut = ({ cityName }: Props) => {
  cityName; // had to use it in code otherwise linter shows error - in the future api request here to get weahter data and isLoading state

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
        <City>{data.location.name}</City>
      </Container>
    );
  }

  return <></>;
};

export { CityWeatherShortcut };
