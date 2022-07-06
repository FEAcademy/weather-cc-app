import { render, screen } from 'theme/theme-test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('Home page', () => {
  it('should render temperature widget', () => {
    render(<TemperatureWidget />);

    const temperatureWidget = screen.getByTestId(TemperatureWidgetTestIds.Container);

    expect(temperatureWidget).toBeInTheDocument();
  });
});
