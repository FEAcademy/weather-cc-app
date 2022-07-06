import React from 'react';
import { Info, Home } from 'react-feather';
import { Paths } from 'utils/Paths';
import { Logo, Container, Wrapper, NavButtonsWrapper, StyledNavLink } from './Navbar.styled';
import { NavbarTestIds } from './NavbarTestIds';

const Navbar = () => {
  return (
    <Container data-testid={NavbarTestIds.Container}>
      <Wrapper>
        <Logo>
          weather<span>ly</span>
        </Logo>
        <NavButtonsWrapper>
          <StyledNavLink to="/" data-testid={NavbarTestIds.HomePageIcon}>
            <Home />
          </StyledNavLink>
          <StyledNavLink to={Paths.About} data-testid={NavbarTestIds.AboutIcon}>
            <Info />
          </StyledNavLink>
        </NavButtonsWrapper>
      </Wrapper>
    </Container>
  );
};

export { Navbar };
