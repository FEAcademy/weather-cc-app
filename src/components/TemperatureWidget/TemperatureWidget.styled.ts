import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 368px;
  height: 200px;
  align-items: center;
`;

const Icon = styled.img`
  width: 126px;
  height: 123px;
  margin: 0 17px 0 14px;
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

export { Container, Icon, TemperatureDetails };
