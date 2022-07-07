import { render, screen } from 'test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('TemperatureWidget', () => {
  it('should render', () => {
    render(<TemperatureWidget description={'Partly cloudy'} />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should contain weather description',  () => {
    render(<TemperatureWidget description={'Partly cloudy'} />);

    const description = screen.getByText(/Partly cloudy/i);

    expect(description).toBeInTheDocument();
  });
});
