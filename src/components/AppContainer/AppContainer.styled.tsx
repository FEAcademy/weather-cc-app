import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: ${({ theme }) => theme.size.basePadding};
`;

const ContainerMain = styled.main`
  max-width: ${({ theme }) => theme.size.baseWidth};
  width: 100%;
`;

export { Container, ContainerMain };
