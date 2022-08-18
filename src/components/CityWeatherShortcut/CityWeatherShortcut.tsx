import Weather from 'api/services/Weather';
import { useMemo } from 'react';
import { convertSpecialCharacters } from 'utils/convertSpecialCharacters';
import { Container, Icon, Temperature, Value, TemperatureSign, City, Tooltip } from './CityWeatherShortcut.styled';
import { CityWeatherShortcutTestIds } from './CityWeatherShortcutTestIds';
import { CityWeatherShortcutLoader } from './components/CityWeatherShortcutLoader';

type Props = {
  cityName: string;
};

const CityWeatherShortcut = ({ cityName }: Props) => {
  const normalizedCity = useMemo(() => convertSpecialCharacters(cityName), [cityName]);
  const { data, isLoading } = Weather.useLocation(normalizedCity);

  if (isLoading) {
    return <CityWeatherShortcutLoader />;
  }

  if (data) {
    const { condition, temp_c } = data.current;
    const roundedTemperature = Math.round(temp_c);
    const { name } = data.location;

    return (
      <Tooltip title={name}>
        <Container data-testid={CityWeatherShortcutTestIds.Widget}>
          <Icon src={condition.icon} alt="weather image" />
          <Temperature>
            <Value>{roundedTemperature}</Value>
            <TemperatureSign>&deg;C</TemperatureSign>
          </Temperature>
          <City>{name}</City>
        </Container>
      </Tooltip>
    );
  }

  return <></>;
};

export { CityWeatherShortcut };
