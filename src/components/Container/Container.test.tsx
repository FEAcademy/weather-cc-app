import { render, screen } from '../../theme/theme-test-utils';
import { Container } from './Container';

describe('Footer', () => {
  it('should render continer content', () => {
    render(
      <Container>
        <div data-testid="container-child"></div>
      </Container>,
    );

    const childOfComponent = screen.getByTestId('container-child');

    expect(childOfComponent).toBeInTheDocument();
  });
});
