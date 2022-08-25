import Weather from 'api/services/Weather';
import { ReactNode, useMemo } from 'react';
import { convertSpecialCharacters } from 'utils/convertSpecialCharacters';
import {
  LinkContainer,
  Icon,
  Temperature,
  Value,
  TemperatureSign,
  City,
  Tooltip,
  ButtonWrapper,
} from './CityWeatherShortcut.styled';
import { CityWeatherShortcutTestIds } from './CityWeatherShortcutTestIds';
import { CityWeatherShortcutLoader } from './components/CityWeatherShortcutLoader';

type Props = {
  cityName: string;
  button?: ReactNode;
};

const CityWeatherShortcut = ({ cityName, button }: Props) => {
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
        <LinkContainer to={`/city/${cityName}`} data-testid={CityWeatherShortcutTestIds.Widget}>
          <Icon src={condition.icon} alt="weather image" />
          <Temperature>
            <Value>{roundedTemperature}</Value>
            <TemperatureSign>&deg;C</TemperatureSign>
          </Temperature>
          <City>{name}</City>
          <ButtonWrapper>{button}</ButtonWrapper>
        </LinkContainer>
      </Tooltip>
    );
  }

  return <></>;
};

export { CityWeatherShortcut };
