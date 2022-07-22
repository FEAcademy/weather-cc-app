import styled from 'styled-components';

const Container = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.paddings.app};
`;
const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.widths.app};
`;

export { Container, Wrapper };
