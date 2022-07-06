import { render, screen } from 'test-utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { HomePage } from './HomePage';

describe('Home page', () => {
  it('should render temperature widget', () => {
    render(<HomePage />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });
});
