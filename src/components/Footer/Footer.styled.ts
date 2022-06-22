import styled from 'styled-components';

const Container = styled.footer`
  height: 76px;
  padding: 0 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.span`
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  color: #707070;

  span:first-child {
    font-weight: 300;
  }

  span:nth-child(2) {
    font-weight: 600;
  }
`;

export { Container, FooterText };
