import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 1000;
  top: 60px;
  left: 0;
  width: 100%;
  height: 42px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.7) -0.24%,
    rgba(255, 255, 255, 0.8) 49.88%,
    rgba(255, 255, 255, 0.7) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.text};
`;

export { Container, Text };
