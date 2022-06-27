import { render, screen, within } from '../../theme/theme-test-utils';
import { Container } from './Container';

describe('Footer', () => {
  it('should render continer content', () => {
    render(
      <Container>
        <div data-testid="container-child"></div>
      </Container>,
    );

    const container = screen.getByRole('main');
    const childOfComponent = within(container).getByTestId('container-child');

    expect(childOfComponent).toBeDefined();
  });
});
