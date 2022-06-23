import App from 'App';
import { styledRender, screen } from 'theme/test-utils';
import { AppContainerTestIds } from './components/AppContainer/AppContainerTestIds';
import { FooterTestIds } from './components/Footer/FooterTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';

describe('App', () => {
  it('should render navbar', () => {
    styledRender(<App />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    expect(navbar).toBeInTheDocument();
  });

  it('should render footer', () => {
    styledRender(<App />);

    const footer = screen.getByTestId(FooterTestIds.Footer);

    expect(footer).toBeInTheDocument();
  });

  it('should render AppContainer', () => {
    styledRender(<App />);

    const AppContainer = screen.getByTestId(AppContainerTestIds.Container);

    expect(AppContainer).toBeInTheDocument();
  });
});
