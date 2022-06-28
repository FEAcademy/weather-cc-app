import { render, screen } from 'utils/test-utils';
import { AppContainer } from './AppContainer';

describe('app container', () => {
    it('should be rendered', () => {
        render(<AppContainer />);
    
        const container = screen.getByRole('main');
        expect(container).toBeInTheDocument();
    });

    it('should render child', () => {
        render(
          <AppContainer>
            <div data-testid="child"/>
          </AppContainer>,
        );
        const containerChild = screen.getByTestId('child');
        expect(containerChild).toBeInTheDocument();
      });
 });
