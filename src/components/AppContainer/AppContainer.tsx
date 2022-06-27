import React, { PropsWithChildren } from 'react';
import { Container, Wrapper } from './AppContainer.styled';

const AppContainer = ({ children }: PropsWithChildren) => (
  <Container>
    <Wrapper>{children}</Wrapper>
  </Container>
);

export { AppContainer };
