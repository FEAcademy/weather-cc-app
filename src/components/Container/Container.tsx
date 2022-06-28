import React, { PropsWithChildren } from 'react';
import { Container as ContainerEl, Wrapper } from './Container.styled';
import { ContainerTestIds } from './ContainerTestIds';

const Container = ({ children }: PropsWithChildren) => (
  <ContainerEl data-testid={ContainerTestIds.Container}>
    <Wrapper>{children}</Wrapper>
  </ContainerEl>
);

export { Container };
