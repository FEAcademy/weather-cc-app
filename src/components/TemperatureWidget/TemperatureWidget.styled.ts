import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 368px;
  height: 200px;
  align-items: center;
`;

const InformationWrapper = styled.div`
  margin-left: 17px;
`; 

const WeatherDescription = styled.p`
  font-size: 20px;
  line-height : 24px;
`;

const Icon = styled.img`
  width: 126px;
  height: 123px;
  margin: 0 17px 0 14px;
`;

export { Container ,WeatherDescription, InformationWrapper, Icon};

