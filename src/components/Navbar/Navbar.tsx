import React from 'react';
import { Logo, Container, Wrapper } from './Navbar.styled';

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          WEATHER<span>LY</span>
        </Logo>
      </Wrapper>
    </Container>
  );
};
