import ContentLoader from 'react-content-loader';
import { Marker, Tooltip } from 'react-leaflet';
import styled from 'styled-components';

const Container = styled(Marker)`
  opacity: 0;
`;

const Content = styled(Tooltip)`
  width: 120px;
  height: 108px;
  opacity: 0.9;
  box-shadow: 0px 10px 20px rgba(227, 227, 227, 0.4);
  border-radius: 20px;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.backgrounds.gradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  &::before {
    display: none;
  }
`;

const WeatherIcon = styled.img`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
`;

const Temperature = styled.p`
  font-size: 36px;
  line-height: 43px;
  margin-top: 25px;
  font-weight: 100;

  & span {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;

const City = styled.p`
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
`;

const WeatherIconLoader = styled(ContentLoader)`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
`;

const WeatherTextLoader = styled(ContentLoader)`
  margin-top: 33px;
`;

export { Container, Content, WeatherIcon, Temperature, City, WeatherIconLoader, WeatherTextLoader };
