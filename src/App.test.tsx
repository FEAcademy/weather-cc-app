import App from 'App';
import { render, screen } from 'theme/test-utils';
import { AppContainerTestIds } from 'components/AppContainer/AppContainerTestIds';
import { FooterTestIds } from './components/Footer/FooterTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';

describe('App', () => {
  it('should render navbar', () => {
    render(<App />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    expect(navbar).toBeInTheDocument();
  });

  it('should render container', () => {
    render(<App />);
    const container = screen.getByTestId(AppContainerTestIds.AppContainer);
    expect(container).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);

    const footer = screen.getByTestId(FooterTestIds.Footer);

    expect(footer).toBeInTheDocument();
  });
});
