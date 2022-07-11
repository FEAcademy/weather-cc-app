import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 368px;
  height: 200px;
  align-items: center;
`;

const WeatherDescription = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
`;

const Icon = styled.img`
  width: 126px;
  height: 123px;
  margin: 0 17px 0 14px;
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

export { Container, WeatherDescription, Icon, Temperature };
