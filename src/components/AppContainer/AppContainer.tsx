import React, { PropsWithChildren } from 'react';
import { Container, ContainerMain } from './AppContainer.styled';
import { AppContainerTestIds } from './AppContainerTestIds';

const AppContainer = ({ children }: PropsWithChildren) => (
  <Container data-testid={AppContainerTestIds.Container}>
    <ContainerMain>{children}</ContainerMain>
  </Container>
);

export { AppContainer };
