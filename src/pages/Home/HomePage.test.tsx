import { render, screen } from 'test-utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { HomePage } from './HomePage';
import { HomePageTestIds } from './HomePageTestIds';

describe('Home page', () => {
  it('should render widget wrapper', () => {
    render(<HomePage />);

    expect(screen.getByTestId(HomePageTestIds.WidgetWrapper)).toBeInTheDocument();
  });

  it('should render temperature widget', () => {
    render(<HomePage />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });
});
