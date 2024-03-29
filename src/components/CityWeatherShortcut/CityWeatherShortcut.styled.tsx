import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled(Link)`
  width: 160px;
  height: 160px;
  box-shadow: 0px 10px 20px rgba(227, 227, 227, 0.4);
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.backgrounds.gradient};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 76px;
  height: 74px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 49px;
  height: 45px;
`;

const Value = styled.span`
  font-size: 48px;
  line-height: 58px;
  font-weight: 100;
`;

const TemperatureSign = styled.span`
  font-size: 24px;
  line-height: 29px;
  font-weight: 400;
`;

const City = styled.p`
  margin-top: 12px;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 80%;
  white-space: nowrap;
`;

const Tooltip = styled.abbr`
  text-decoration: none;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export { LinkContainer, Icon, Temperature, Value, TemperatureSign, City, Tooltip, ButtonWrapper };
