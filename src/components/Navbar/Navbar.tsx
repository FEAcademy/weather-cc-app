import React from 'react';
import { Container, Wrapper, Logo } from './Navbar.styled';
import { NavbarTestIds } from './NavbarTestIds';

export const Navbar = () => {
  return (
    <Container data-testid={NavbarTestIds.Navbar}>
      <Wrapper>
        <Logo data-testid={NavbarTestIds.Logo}>
          Weather<span>ly</span>
        </Logo>
      </Wrapper>
    </Container>
  );
};
