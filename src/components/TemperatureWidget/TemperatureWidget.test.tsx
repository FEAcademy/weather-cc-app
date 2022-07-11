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
        description={weatherSuccessResponse.current.condition.text}
      />,
    );

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should render content properly', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        description={weatherSuccessResponse.current.condition.text}
        currentTemperature={weatherSuccessResponse.current.temp_c}
        feelslikeTemperature={weatherSuccessResponse.current.feelslike_c}
      />,
    );

    const icon = screen.getByRole('img');
    const temperature = screen.getByText(/25/i);
    const description = screen.getByText(/Sunny/i);
    const feelsLike = screen.getByText(/feels like/i);

    expect(icon).toBeInTheDocument();
    expect(temperature).toBeInTheDocument();
    expect(temperature).toHaveTextContent('25\u00B0C');
    expect(description).toBeInTheDocument();
    expect(feelsLike).toBeInTheDocument();
    expect(feelsLike).toHaveTextContent('feels like 26.1\u00B0C');
  });
});
