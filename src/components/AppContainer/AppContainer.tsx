import { PropsWithChildren } from 'react';
import { Container, Wrapper } from './AppContainer.styled';

const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export { AppContainer };
