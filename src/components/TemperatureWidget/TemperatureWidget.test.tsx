import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('TemperatureWidget', () => {
  it('should render', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        temp_c={weatherSuccessResponse.current.temp_c}
      />,
    );

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should display temperature correctly', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        temp_c={weatherSuccessResponse.current.temp_c}
      />,
    );

    const temperature = screen.getByTestId(TemperatureWidgetTestIds.Temperature);

    expect(temperature).toHaveTextContent('25\u00B0C');
  });

  it('should render icon', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        temp_c={weatherSuccessResponse.current.temp_c}
      />,
    );

    const icon = screen.getByRole('img');

    expect(icon).toBeInTheDocument();
  });
});
