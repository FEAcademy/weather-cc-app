import styled from 'styled-components';

const ContainerEl = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: ${({ theme }) => theme.padding.app};
`;

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.width.app};
  width: 100%;
`;

export { ContainerEl, Wrapper };
