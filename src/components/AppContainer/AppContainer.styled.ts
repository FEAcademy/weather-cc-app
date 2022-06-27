import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.main`
  width: 100%;
  max-width: ${(props) => props.theme.appMaxWidth};
`;

export { Container, Wrapper };
