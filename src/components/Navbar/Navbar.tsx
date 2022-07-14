import { Paths } from 'enums/Paths';
import { Info, Home, Map } from 'react-feather';
import { useLocation, Location } from 'react-router-dom';
import { Logo, Container, Wrapper, NavButtonsWrapper, StyledNavLink } from './Navbar.styled';
import { NavbarTestIds } from './NavbarTestIds';

const Navbar = () => {
  const location: Location = useLocation();
  const isWithShadow: boolean = location.pathname === Paths.Map;

  return (
    <Container data-testid={NavbarTestIds.Container} withShadow={isWithShadow}>
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
