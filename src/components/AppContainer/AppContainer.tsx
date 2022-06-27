import React from 'react';
import { Container, Wrapper } from './AppContainer.styled';

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export { AppContainer };
