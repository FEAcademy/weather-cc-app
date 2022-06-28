import { PropsWithChildren } from 'react';
import { Container, Wrapper } from './PageContainer.styled';

const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export { PageContainer };
