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

  it('should render icon', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        description={weatherSuccessResponse.current.condition.text}
        currentTemperature={weatherSuccessResponse.current.temp_c}
        feelslikeTemperature={weatherSuccessResponse.current.feelslike_c}
      />,
    );

    const icon = screen.getByRole('img');

    expect(icon).toBeInTheDocument();
  });

  it('should contain weather description', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        description={weatherSuccessResponse.current.condition.text}
        currentTemperature={weatherSuccessResponse.current.temp_c}
        feelslikeTemperature={weatherSuccessResponse.current.feelslike_c}
      />,
    );
    const description = screen.getByText(/Sunny/i);

    expect(description).toBeInTheDocument();
  });

  it('should display temperature correctly', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        description={weatherSuccessResponse.current.condition.text}
        currentTemperature={weatherSuccessResponse.current.temp_c}
        feelslikeTemperature={weatherSuccessResponse.current.feelslike_c}
      />,
    );

    const temperature = screen.getByText(/25/i);

    expect(temperature).toBeInTheDocument();
    expect(temperature).toHaveTextContent('25\u00B0C');
  });

  it('should display feels like temperature correctly', () => {
    render(
      <TemperatureWidget
        icon={weatherSuccessResponse.current.condition.icon}
        description={weatherSuccessResponse.current.condition.text}
        currentTemperature={weatherSuccessResponse.current.temp_c}
        feelslikeTemperature={weatherSuccessResponse.current.feelslike_c}
      />,
    );

    const feelsLike = screen.getByText(/feels like/i);

    expect(feelsLike).toBeInTheDocument();
    expect(feelsLike).toHaveTextContent('feels like 26.1\u00B0C');
  });
});
