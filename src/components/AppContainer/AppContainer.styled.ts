import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: ${(props) => props.theme.padding.appPadding};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: ${(props) => props.theme.width.maxWidth};
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.fontColor};
`;
