import styled from 'styled-components';

const Container = styled.footer`
  height: 76px;
  padding: 0 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.lightGray};

  span:first-child {
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }

  span:nth-child(2) {
    font-weight: 600;
  }
`;

export { Container, FooterText };
