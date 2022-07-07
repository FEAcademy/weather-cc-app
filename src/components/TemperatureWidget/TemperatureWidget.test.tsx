import { render, screen } from 'test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('TemperatureWidget', () => {
  it('should render', () => {
    render(<TemperatureWidget feelslike_c={20} />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should display temperature correctly', () => {
    render(<TemperatureWidget feelslike_c={20} />);

    const feelsLike = screen.getByText(/feels like/i);

    expect(feelsLike).toHaveTextContent('feels like 20\u00B0C');
  });
});
