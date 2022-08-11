import styled from 'styled-components';

const Container = styled.div`
  width: 160px;
  min-width: 160px;
  height: 160px;
  box-shadow: 0px 10px 20px rgba(227, 227, 227, 0.4);
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.backgrounds.gradient};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 76px;
  height: 74px;
  position: absolute;
  top: -37px;
  left: 50%;
  transform: translateX(-50%);
`;

const Temperature = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 49px;
  height: 45px;
`;

const Value = styled.span`
  font-size: 48px;
  line-height: 58px;
  font-weight: 300;
`;

const TemperatureSign = styled.span`
  font-size: 24px;
  line-height: 29px;
  font-weight: 400;
`;

const City = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

const FavouriteButtonWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.colors.backgrounds.main};
  opacity: 0.5;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 25px;
`;

export { Container, Icon, Temperature, Value, TemperatureSign, City, FavouriteButtonWrapper };