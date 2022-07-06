import { render, screen } from 'theme/theme-test-utils';
import { HomePage } from './HomePage';
import { HomePageTestIds } from './HomePageTestIds';

describe('Home page', () => {
  it('should render title', () => {
    render(<HomePage />);

    expect(screen.getByTestId(HomePageTestIds.Title)).toHaveTextContent('Home page');
  });

  // it('should render temperature box', () => {
  //   render(<HomePage />);

  //   expect(screen.getByTestId(HomePageTestIds.TemperatureBox)).toBeInTheDocument();
  // });
});
