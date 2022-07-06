import styled from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 10px 30px rgba(227, 227, 227, 0.5);
  border-radius: 20px;
  width: 368px;
  height: 200px;
  padding: 30px 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 23px;
  grid-column-gap: 16px;
`;

const WeatherData = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid rgba(112, 112, 112, 0.5);
  padding-bottom: 7px;
`;

const Property = styled.p`
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 700;
`;

const Value = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
`;

export { Container, Value, WeatherData, Property };
