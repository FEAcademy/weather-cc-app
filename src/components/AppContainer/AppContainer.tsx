import React from 'react';
import { Container, Wrapper } from './AppContainer.styled';
import { AppContainerTestIds } from './AppContainerTestIds';

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return (
    <Container data-testid={AppContainerTestIds.AppContainer}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export { AppContainer };
