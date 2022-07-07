import { Container, Icon, Temperature } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

interface Props {
  icon: string;
  temp_c: number;
}

const TemperatureWidget = ({ temp_c, icon }: Props) => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Container}>
      {icon && <Icon src={icon} alt="Weather widget icon" />}
      <div>
        <Temperature data-testid={TemperatureWidgetTestIds.Temperature}>
          {temp_c}
          <span>&deg;C</span>
        </Temperature>
      </div>
    </Container>
  );
};

export { TemperatureWidget };
