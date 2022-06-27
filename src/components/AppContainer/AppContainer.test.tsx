import { render, screen } from 'theme/test-utils';
import { Navbar } from 'components/Navbar';
import { AppContainer } from './AppContainer';

describe('App container', () => {
  it('should render app main container', () => {
    render(<AppContainer />);

    const mainContainer = screen.getByRole('main');

    expect(mainContainer).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <AppContainer>
        <Navbar />
      </AppContainer>,
    );

    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });
});
