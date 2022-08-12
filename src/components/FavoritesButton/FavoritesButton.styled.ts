import styled from 'styled-components';

const Button = styled.button<{ active: boolean }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 25px;
  height: 25px;
  transform: translate(-50%, 50%);
  background: ${({ theme }) => theme.colors.backgrounds.main};
  color: ${({ theme, active }) => (active ? '#DC5F44' : theme.colors.text)};
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export { Button };
