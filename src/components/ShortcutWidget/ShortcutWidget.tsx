import { Weather } from 'models/Weather';
import {
  Container,
  Icon,
  Temperature,
  Value,
  TemperatureSign,
  City,
  FavouriteButtonWrapper,
} from './ShortcutWidget.styled';
import { ShortcutWidgetTestIds } from './ShortcutWidgetTestIds';

interface Props {
  data: Weather;
}

const ShortcutWidget = ({ data }: Props) => {
  const { condition, temp_c } = data.current;
  const roundedTemperature = Math.round(temp_c);

  return (
    <Container data-testid={ShortcutWidgetTestIds.Widget}>
      <Icon src={condition.icon} alt="weather image" />
      <Temperature>
        <Value>{roundedTemperature}</Value>
        <TemperatureSign>&deg;C</TemperatureSign>
      </Temperature>
      <City>{data.location.name}</City>
      <FavouriteButtonWrapper>{'<3' /*here will be button compoennt in the future*/}</FavouriteButtonWrapper>
    </Container>
  );
};

export { ShortcutWidget };
