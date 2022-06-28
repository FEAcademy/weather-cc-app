import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.padding.app};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.width.max};
  width: 100%;
  color: ${({ theme }) => theme.color.font};
`;
