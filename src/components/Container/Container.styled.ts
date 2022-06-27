import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.appPadding};
`;

export const InnerContainer = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.width.appWidth};
`;
