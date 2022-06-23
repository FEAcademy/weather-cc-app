import React from 'react';

import { Wrapper, InnerContainer } from './Container.styled';

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return (
    <Wrapper>
      <InnerContainer>{children}</InnerContainer>
    </Wrapper>
  );
}
