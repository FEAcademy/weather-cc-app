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

export { Container ,WeatherDescription, InformationWrapper};
