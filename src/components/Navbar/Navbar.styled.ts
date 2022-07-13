import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  isMapRoute: boolean;
}

const Container = styled.nav<Props>`
  width: 100%;
  height: 60px;
  position: sticky;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  opacity: 0.9;
  padding: ${({ theme }) => theme.paddings.app};
  z-index: 500;
  box-shadow: ${(props) => props.isMapRoute && '0px 12px 20px rgba(0, 0, 0, 0.1)'};
`;

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.widths.app};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;

  & span {
    font-weight: 300;
  }
`;

const NavButtonsWrapper = styled.div`
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 21px;
  opacity: 0.4;
  color: ${({ theme }) => theme.colors.text};
  &[aria-current] {
    opacity: 1;
  }
`;

export { Logo, Wrapper, Container, NavButtonsWrapper, StyledNavLink };
