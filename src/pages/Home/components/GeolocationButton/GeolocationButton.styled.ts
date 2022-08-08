import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0px;
  height: 54px;
  width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.backgrounds.gradient};
  border-radius: 27px;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  > svg {
    opacity: 0.4;
    height: 24px;
    width: 24px;
  }
  :hover {
    > svg {
      opacity: 1;
    }
  }
`;

export { Button };
