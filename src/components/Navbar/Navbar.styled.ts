import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  height: 60px;
  position: sticky;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 0 18px;
`;

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.appMaxWidth}px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 18px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.lightGray};
  text-transform: uppercase;

  & span {
    font-weight: ${(props) => props.theme.fontWeights.light};
  }
`;

export { Logo, Wrapper, Container };
