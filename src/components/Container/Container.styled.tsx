import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: ${({ theme }) => theme.paddings.app};
`;

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.widths.app};
  width: 100%;
`;

export { Container, Wrapper };
