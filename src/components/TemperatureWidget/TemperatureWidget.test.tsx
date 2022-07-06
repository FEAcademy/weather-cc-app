import { render, screen } from 'test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('Temperature widget', () => {
  it('should render widget container', () => {
    render(<TemperatureWidget />);
    const container = screen.getByTestId(TemperatureWidgetTestIds.Container);
    expect(container).toBeInTheDocument();
  });
});
