import styled from 'styled-components';

const Container = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.paddings.app};
`;
const Wrapper = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.widths.appMax};
`;

export { Container, Wrapper };
