import React from 'react';
import { Logo, Container, Wrapper } from './Navbar.styled';
import { NavbarTestIds } from './NavbarTestIds';

export const Navbar = () => {
  return (
    <Container data-testid={NavbarTestIds.Container}>
      <Wrapper>
        <Logo data-testid={NavbarTestIds.Logo}>
          WEATHER<span>LY</span>
        </Logo>
      </Wrapper>
    </Container>
  );
};
