import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  height: 60px;
  position: sticky;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  padding: ${({ theme }) => theme.paddings.appPadding};
`;

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.widths.appWidth};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-transform: uppercase;

  & span {
    font-weight: 300;
  }
`;

export { Logo, Wrapper, Container };
