import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  height: 76px;
  padding: ${({ theme }) => theme.size.basePadding};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.black};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 14px;
  color: ${({ theme }) => theme.color.text};

  span:first-child {
    font-weight: ${({ theme }) => theme.font.weight.light};
  }

  span:nth-child(2) {
    font-weight: 600;
  }
`;

export { Container, FooterText };
