import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  position: relative;
`;

const GeolocationButton = styled.button`
  position: absolute;
  top: 0;
  right: -24px;
  height: 54px;
  width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 27px;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
  color: #707070;
  cursor: pointer;
  > svg {
    opacity: 0.4;
    height: 22px;
  }
  :hover {
    > svg {
      opacity: 1;
    }
  }
`;

const WidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export { WidgetWrapper, InputContainer, GeolocationButton, Container };
