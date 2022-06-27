import React, { PropsWithChildren } from 'react';

import { Wrapper, InnerContainer } from './Container.styled';

export function Container({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <InnerContainer>{children}</InnerContainer>
    </Wrapper>
  );
}
