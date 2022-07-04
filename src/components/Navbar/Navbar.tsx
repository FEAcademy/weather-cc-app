import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AboutIcon } from '../../assets/icons/about.svg';
import { ReactComponent as HomePageIcon } from '../../assets/icons/homePage.svg';
import { Logo, Container, Wrapper, NavButtons } from './Navbar.styled';
import { NavbarTestIds } from './NavbarTestIds';
const Navbar = () => {
  return (
    <Container data-testid={NavbarTestIds.Container}>
      <Wrapper>
        <Logo>
          weather<span>ly</span>
        </Logo>
        <NavButtons>
          <NavLink
            to="/"
            data-testid={NavbarTestIds.HomePageIcon}
            className={({ isActive }) => (isActive ? undefined : 'inactive')}
          >
            <HomePageIcon />
          </NavLink>
          <NavLink
            to="about"
            data-testid={NavbarTestIds.AboutIcon}
            className={({ isActive }) => (isActive ? undefined : 'inactive')}
          >
            <AboutIcon />
          </NavLink>
        </NavButtons>
      </Wrapper>
    </Container>
  );
};

export { Navbar };
