import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('TemperatureWidget', () => {
  it('should render', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        feelslikeTemperature={weatherSuccessResponse.current.feelslike_c}
        currentTemperature={weatherSuccessResponse.current.temp_c}
      />,
    );

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should display feels like temperature correctly', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        currentTemperature={weatherSuccessResponse.current.temp_c}
        feelslikeTemperature={weatherSuccessResponse.current.feelslike_c}
      />,
    );

    const feelsLike = screen.getByText(/feels like/i);

    expect(feelsLike).toBeInTheDocument();
    expect(feelsLike).toHaveTextContent('feels like 26.1\u00B0C');
  });
  it('should display temperature correctly', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        currentTemperature={weatherSuccessResponse.current.temp_c}
        feelslikeTemperature={weatherSuccessResponse.current.feelslike_c}
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
        feelslikeTemperature={weatherSuccessResponse.current.feelslike_c}
      />,
    );

    const icon = screen.getByRole('img');

    expect(icon).toBeInTheDocument();
  });
});
