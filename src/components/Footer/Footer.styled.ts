import styled from 'styled-components';

export const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 18px;
  height: 76px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #707070;

  span {
    font-size: 12px;
  }

  span:first-child {
    font-weight: 900;
  }

  span:nth-child(2) {
    font-weight: 300;
  }

  span:nth-child(3) {
    font-weight: 700;
  }
`;
