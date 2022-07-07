import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('TemperatureWidget', () => {
  it('should render', () => {
    render(<TemperatureWidget icon={weatherSuccessResponse.current.condition.icon} feelslike_c={20} />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should display temperature correctly', () => {
    render(<TemperatureWidget icon={weatherSuccessResponse.current.condition.icon} feelslike_c={20} />);

    const feelsLike = screen.getByText(/feels like/i);

    expect(feelsLike).toHaveTextContent('feels like 20\u00B0C');
  });
  it('should render icon', () => {
    render(<TemperatureWidget icon={weatherSuccessResponse.current.condition.icon} feelslike_c={20} />);

    const icon = screen.getByRole('img');

    expect(icon).toBeInTheDocument();
  });
});
