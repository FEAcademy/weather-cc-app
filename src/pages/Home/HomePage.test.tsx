import { render, screen } from 'theme/theme-test-utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget/TemperatureWidgetTestIds';
import { HomePage } from './HomePage';
import { HomePageTestIds } from './HomePageTestIds';

describe('Home page', () => {
  it('should render title', () => {
    render(<HomePage />);

    expect(screen.getByTestId(HomePageTestIds.Title)).toHaveTextContent('Home page');
  });
  it('should render temperature widget', () => {
    render(<HomePage />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.container)).toBeInTheDocument();
  });
});
