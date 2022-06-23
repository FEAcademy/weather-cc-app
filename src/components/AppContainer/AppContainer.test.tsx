import { styledRender, screen } from 'theme/test-utils';
import { AppContainer } from './AppContainer';
import { AppContainerTestIds } from './AppContainerTestIds';

describe('App Container', () => {
  it('should render App Container', () => {
    styledRender(
      <AppContainer>
        <></>
      </AppContainer>,
    );

    const main = screen.getByTestId(AppContainerTestIds.Container);

    expect(main).toBeInTheDocument();
  });
});
