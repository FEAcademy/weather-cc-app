import App from 'App';
import { ContainerTestIds } from 'components/Container/ContainerTestIds';
import { FooterTestIds } from './components/Footer/FooterTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';
import { render, screen } from './theme/theme-test-utils';

describe('App', () => {
  it('should render navbar', () => {
    render(<App />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    expect(navbar).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);

    const footer = screen.getByTestId(FooterTestIds.Footer);

    expect(footer).toBeInTheDocument();
  });

  it('should render container', () => {
    render(<App />);

    const container = screen.getByTestId(ContainerTestIds.Container);

    expect(container).toBeInTheDocument();
  });
});
