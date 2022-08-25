import { PropsWithChildren } from 'react';
import { Container } from './components.styled';

const ShortcutsWrapper = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export { ShortcutsWrapper };
