import React from 'react';
import { Container, Wrapper } from './AppContainer.styled';

const AppContainer = ({ children }: { children: React.ReactNode }) => (
  <Container>
    <Wrapper>{children}</Wrapper>
  </Container>
);

export { AppContainer };
