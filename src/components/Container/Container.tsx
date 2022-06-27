import React, { PropsWithChildren } from 'react';

import { Wrapper, InnerContainer } from './Container.styled';
import { ContainerTestIds } from './ContainerTestIds';

export function Container({ children }: PropsWithChildren) {
  return (
    <Wrapper data-testid={ContainerTestIds.Container}>
      <InnerContainer>{children}</InnerContainer>
    </Wrapper>
  );
}
