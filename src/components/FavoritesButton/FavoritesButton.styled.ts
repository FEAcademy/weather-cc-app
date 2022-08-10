import { Heart } from 'react-feather';
import styled from 'styled-components';

const Button = styled.button<{ isActive: boolean }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 25px;
  height: 25px;
  transform: translate(-50%, 50%);
  background: ${({ theme }) => theme.colors.backgrounds.main};
  color: ${({ theme, isActive }) => (isActive ? '#DC5F44' : theme.colors.text)};
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const HeartIcon = styled(Heart)`
  width: 13px;
  height: 13px;
  display: flex;
  margin: auto;
`;

export { Button, HeartIcon };
