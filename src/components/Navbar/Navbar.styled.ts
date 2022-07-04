import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  height: 60px;
  position: sticky;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  opacity: 0.9;
  padding: ${({ theme }) => theme.paddings.app};
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

const NavButtons = styled.div`
  display: flex;
  > * {
    display: flex;
    align-items: center;
    margin-left: 21px;
  }
  .inactive {
    opacity: 0.4;
  }
`;

export { Logo, Wrapper, Container, NavButtons };
