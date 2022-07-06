import { render, screen } from 'theme/theme-test-utils';
import { TemperatureBoxTestIds } from '../../components/TemperatureBox';
import { HomePage } from './HomePage';
import { HomePageTestIds } from './HomePageTestIds';

describe('Home page', () => {
  it('should render widget wrapper', () => {
    render(<HomePage />);

    expect(screen.getByTestId(HomePageTestIds.WidgetWrpper)).toBeInTheDocument();
  });

  it('should render temperature box', () => {
    render(<HomePage />);

    expect(screen.getByTestId(TemperatureBoxTestIds.TemperatureBox)).toBeInTheDocument();
  });
});
