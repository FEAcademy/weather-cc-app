import styled from 'styled-components';

const Container = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.appMaxWidth};
`;

export { Container, Wrapper };
