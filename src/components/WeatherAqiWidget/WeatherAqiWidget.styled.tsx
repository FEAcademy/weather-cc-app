import styled, { css } from 'styled-components';
import { Container as WeatherInfoWidgetContainer } from 'components/WeatherInfoWidget/WeatherInfoWidget.styled';

interface DefraTheme {
  backgroundColors: string[];
  textColor: string;
}

const Container = styled(WeatherInfoWidgetContainer)<{ defraColors: DefraTheme }>`
  &&& {
    ${({ defraColors }) => css`
      background: linear-gradient(
        106.29deg,
        ${defraColors.backgroundColors[0]} 0%,
        ${defraColors.backgroundColors[1]} 100%
      );
      color: ${defraColors.textColor};
    `}
  }
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
  line-height: 14px;
  font-weight: 700;
`;

const Value = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
`;

export { Container, Value, WeatherData, Property };
