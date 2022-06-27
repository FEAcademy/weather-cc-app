import styled from 'styled-components';

const ContainerEl = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: ${({ theme }) => theme.size.basePadding};
`;

const Wrapper = styled.main`
  max-width: ${({ theme }) => theme.size.baseWidth};
  width: 100%;
`;

export { ContainerEl, Wrapper };
