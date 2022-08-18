import ContentLoader from 'react-content-loader';
import { Tooltip } from 'react-leaflet';
import styled from 'styled-components';

const Content = styled(Tooltip)`
  width: 120px;
  min-height: 108px;
  box-shadow: 0px 10px 20px rgba(227, 227, 227, 0.4);
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.text};
  background: linear-gradient(106.29deg, #ffffffe6 0%, #fafafae6 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  &::before {
    display: none;
  }
  &:hover,
  &:focus {
    z-index: 1000;
    background: ${({ theme }) => theme.colors.backgrounds.gradient};
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
  word-break: break-word;
  white-space: normal;
  text-align: center;
  margin-bottom: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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

const CityNameTooltip = styled.abbr`
  text-decoration: none;
  max-width: 80%;
`;

export { Content, WeatherIcon, Temperature, City, WeatherIconLoader, WeatherTextLoader, CityNameTooltip };
