import React from 'react';
import { Container, Wrapper, Logo } from './Navbar.styled';

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          Weather<span>ly</span>
        </Logo>
      </Wrapper>
    </Container>
  );
};
