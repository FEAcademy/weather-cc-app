import React from 'react';

import { ContainerWrapper } from './Container.styled';

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}
