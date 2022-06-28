import styled from 'styled-components';

const Container = styled.footer`
  height: 76px;
  padding: ${({ theme }) => theme.padding.app};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.color.font};

  span:first-child {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }

  span:nth-child(2) {
    font-weight: 600;
  }
`;

export { Container, FooterText };
