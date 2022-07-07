import { render, screen } from 'test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('TemperatureWidget', () => {
  it('should render', () => {
    render(<TemperatureWidget temp_c={30} />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should display temperature correctly', () => {
    render(<TemperatureWidget temp_c={30} />);

    const temperature = screen.getByTestId(TemperatureWidgetTestIds.Temperature);

    expect(temperature).toHaveTextContent('30\u00B0C');
  });
});
