import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('TemperatureWidget', () => {
  it('should render', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        currentTemperature={weatherSuccessResponse.current.temp_c}
        description={weatherSuccessResponse.current.condition.text}
      />,
    );

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should display temperature correctly', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        currentTemperature={weatherSuccessResponse.current.temp_c}
        description={weatherSuccessResponse.current.condition.text}
      />,
    );

    const temperature = screen.getByText(/25/i);

    expect(temperature).toBeInTheDocument();
    expect(temperature).toHaveTextContent('25\u00B0C');
  });

  it('should render icon', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        currentTemperature={weatherSuccessResponse.current.temp_c}
        description={weatherSuccessResponse.current.condition.text}
      />,
    );

    const icon = screen.getByRole('img');

    expect(icon).toBeInTheDocument();
  });

  it('should contain weather description', () => {
    render(
      <TemperatureWidget
        description={weatherSuccessResponse.current.condition.text}
        icon={weatherSuccessResponse.current.condition.icon}
        currentTemperature={weatherSuccessResponse.current.temp_c}
      />,
    );
    const description = screen.getByText(/Sunny/i);

    expect(description).toBeInTheDocument();
  });
});
