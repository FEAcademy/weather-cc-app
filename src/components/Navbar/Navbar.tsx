import React from 'react';
import { Logo, Container, Wrapper } from './Navbar.styled';
import { NavbarTestIds } from './NavbarTestIds';

const Navbar = () => (
  <Container data-testid={NavbarTestIds.Container}>
    <Wrapper>
      <Logo>
        weather<span>ly</span>
      </Logo>
    </Wrapper>
  </Container>
);

export { Navbar };