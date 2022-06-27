import React from 'react';
import { DataTestIDS } from 'utils/data-test-ids';
import { Logo, Container, Wrapper } from './Navbar.styled';

const Navbar = () => (
  <Container data-testid={DataTestIDS.NavbarContainer}>
    <Wrapper>
      <Logo>
        weather<span>ly</span>
      </Logo>
    </Wrapper>
  </Container>
);

export { Navbar };
