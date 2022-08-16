import { Paths } from 'enums/Paths';
import { Info, Home, Map } from 'react-feather';
import { useLocation, Location } from 'react-router-dom';
import { Logo, Container, Wrapper, NavButtonsWrapper, StyledNavLink } from './Navbar.styled';
import { NavbarTestIds } from './NavbarTestIds';
import { NavbarTitles } from './NavbarTitles';

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
          <StyledNavLink to={Paths.Home} title={NavbarTitles.Home}>
            <Home />
          </StyledNavLink>
          <StyledNavLink to={Paths.Map} title={NavbarTitles.Map}>
            <Map />
          </StyledNavLink>
          <StyledNavLink to={Paths.About} title={NavbarTitles.About}>
            <Info />
          </StyledNavLink>
        </NavButtonsWrapper>
      </Wrapper>
    </Container>
  );
};

export { Navbar };
