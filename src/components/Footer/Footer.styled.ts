import styled from 'styled-components';

export const Container = styled.footer`
  height: 76px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.h1`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 900;
  color: #707070;
  span:nth-child(1) {
    font-weight: 300;
  }
  span:nth-child(2) {
    font-weight: 600;
  }
`;
