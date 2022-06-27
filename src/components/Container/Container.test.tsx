import { styledRender, screen } from 'theme/test-utils';
import { Container } from './Container';
import { ContainerTestIds } from './ContainerTestIds';

describe('app container', () => {
  it('should render container', () => {
    styledRender(
      <Container>
        <></>
      </Container>,
    );

    const main = screen.getByTestId(ContainerTestIds.Container);

    expect(main).toBeInTheDocument();
  });

  it('should render child', () => {
    styledRender(
      <Container>
        <div role="child" />
      </Container>,
    );

    const child = screen.getByRole('child');

    expect(child).toBeInTheDocument();
  });
});
