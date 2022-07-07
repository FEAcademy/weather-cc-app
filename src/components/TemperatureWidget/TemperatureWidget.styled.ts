import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 368px;
  height: 200px;
  align-items: center;
`;

const TemperatureDetails = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;

  & span {
    font-size: 15px;
    line-height: 18px;
  }
`;

export { Container, TemperatureDetails };
