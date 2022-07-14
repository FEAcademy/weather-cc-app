import { Paths } from 'enums/Paths';
import { Info, Home, Map } from 'react-feather';
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
          <StyledNavLink to={Paths.Home} data-testid={NavbarTestIds.HomeIcon}>
            <Home />
          </StyledNavLink>
          <StyledNavLink to={Paths.Map} data-testid={NavbarTestIds.MapIcon}>
            <Map />
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
