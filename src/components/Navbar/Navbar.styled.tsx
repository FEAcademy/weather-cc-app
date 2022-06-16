import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  height: 60px;
  width: 100%;
  padding: 0 18px;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 18px;
  font-weight: 800;
  color: #707070;
  text-transform: uppercase;

  span {
    font-weight: 300;
  }
`;
