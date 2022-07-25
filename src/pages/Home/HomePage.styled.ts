import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  position: relative;
`;

const WidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export { WidgetWrapper, FormContainer, Container };
