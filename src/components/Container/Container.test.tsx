import { styledRender, screen } from 'theme/test-utils';
import { Container } from './Container';
import { ContainerTestIds } from './ContainerTestIds';

describe('App Container', () => {
  it('should render App Container', () => {
    styledRender(
      <Container>
        <></>
      </Container>,
    );

    const main = screen.getByTestId(ContainerTestIds.Container);

    expect(main).toBeInTheDocument();
  });
});
