import { weatherDataInCitySuccessResponse } from 'mocks/mockData';
import { Place } from 'models/Place';
import { Container, Icon, Temperature, Value, TemperatureSign, City } from './CityWeatherShortcut.styled';
import { CityWeatherShortcutTestIds } from './CityWeatherShortcutTestIds';

type Props = {
  cityData: Place;
};

const WEATHER_DATA_TEMP = weatherDataInCitySuccessResponse;

const CityWeatherShortcut = ({ cityData }: Props) => {
  cityData; // had to use it in code otherwise linter shows error - in the future api request here

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
};

export { CityWeatherShortcut };
