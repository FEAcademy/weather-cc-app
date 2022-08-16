import { weatherDataInCitySuccessResponse } from 'mocks/mockData';
import { Container, Icon, Temperature, Value, TemperatureSign, City } from './CityWeatherShortcut.styled';
import { CityWeatherShortcutTestIds } from './CityWeatherShortcutTestIds';
import { CityWeatherShortcutLoader } from './components/CityWeatherShortcutLoader';

type Props = {
  cityName: string;
};

const WEATHER_DATA_TEMP = weatherDataInCitySuccessResponse;
const IS_WEATHER_DATA_LOADING_TEMP = false;

const CityWeatherShortcut = ({ cityName }: Props) => {
  cityName; // had to use it in code otherwise linter shows error - in the future api request here to get weahter data and isLoading state

  if (IS_WEATHER_DATA_LOADING_TEMP) {
    return <CityWeatherShortcutLoader />;
  }

  if (WEATHER_DATA_TEMP) {
    const { condition, temp_c } = WEATHER_DATA_TEMP.current;
    const roundedTemperature = Math.round(temp_c);

    return (
      <Container data-testid={CityWeatherShortcutTestIds.Widget}>
        <Icon src={condition.icon} alt="weather image" />
        <Temperature>
          <Value>{roundedTemperature}</Value>
          <TemperatureSign>&deg;C</TemperatureSign>
        </Temperature>
        <City>{WEATHER_DATA_TEMP.location.name}</City>
      </Container>
    );
  }

  return <></>;
};

export { CityWeatherShortcut };
