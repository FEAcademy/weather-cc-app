import { render, screen } from 'theme/test-utils';
import { AppContainer } from './AppContainer';

describe('App Container', () => {
  it('should render main container', () => {
    render(<AppContainer />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  it('should render children', () => {
    render(
      <AppContainer>
        <p data-testid="children"></p>
      </AppContainer>,
    );
    const containerChild = screen.getByTestId('children');
    expect(containerChild).toBeInTheDocument();
  });
});
