import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.padding.appPadding};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.width.maxWidth};
  width: 100%;
  color: ${({ theme }) => theme.color.fontColor};
`;
