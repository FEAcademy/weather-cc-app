import styled from 'styled-components';

const Container = styled.nav`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 18px;
  background: rgba(255, 255, 255, 0.9);
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Logo = styled.h1`
  font-weight: 900;
  font-size: 18px;
  line-height: 21.6px;
  color: #707070;

  span {
    font-weight: 300;
  }
`;

export { Container, Wrapper, Logo };
