import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 368px;
  height: 200px;
  align-items: center;
`;

const Temperature = styled.p`
  font-weight: 100;
  font-size: 96px;
  line-height: 96px;

  & span {
    font-weight: 400;
    font-size: 48px;
    line-height: 96px;
  }
`;

export { Container, Temperature };
