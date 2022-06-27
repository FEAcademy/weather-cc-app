import styled from 'styled-components';

const Container = styled.footer`
  bottom: 0;
  left: 0;
  right: 0;
  height: 76px;
  padding: ${(props) => props.theme.padding.appPadding};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.span`
  font-weight: ${(props) => props.theme.weight.headerWeight};
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.color.fontColor};

  span:first-child {
    font-weight: ${(props) => props.theme.weight.normalWeight};
  }

  span:nth-child(2) {
    font-weight: 600;
  }
`;

export { Container, FooterText };
