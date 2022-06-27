import { render, screen } from 'theme/test-utils';
import { AppContainer } from './AppContainer';

describe('App container', () => {
  it('should render app main container', () => {
    render(<AppContainer />);

    const mainContainer = screen.getByRole('main');

    expect(mainContainer).toBeInTheDocument();
  });
});
