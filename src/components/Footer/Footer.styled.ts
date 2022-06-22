import styled from 'styled-components';

const Container = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76px;
`;

const Text = styled.h4`
  font-weight: 900;
  font-size: 12px;
  color: #707070;

  & span:first-child {
    font-weight: 300;
  }

  & span:nth-child(2) {
    font-weight: 600;
  }
`;

export { Container, Text };
