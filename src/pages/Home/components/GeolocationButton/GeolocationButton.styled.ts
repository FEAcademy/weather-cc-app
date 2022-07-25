import styled from 'styled-components';

const Button = styled.button`
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

export { Button };
