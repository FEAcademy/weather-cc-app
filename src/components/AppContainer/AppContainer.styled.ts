import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.paddings.app};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.widths.app};
  width: 100%;
  color: ${({ theme }) => theme.colors.font};
`;
