import styled from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgrounds.gradient};
  box-shadow: 0px 10px 20px rgba(227, 227, 227, 0.4);
  border-radius: 20px;
`;

export { Container };
