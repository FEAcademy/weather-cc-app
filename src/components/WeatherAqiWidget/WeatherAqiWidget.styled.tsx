import styled from 'styled-components';
import { serializeDefraIndex } from 'utils/serializeDefraIndex';
import { Container as WeatherInfoWidgetContainer } from 'components/WeatherInfoWidget/WeatherInfoWidget.styled';

const Container = styled(WeatherInfoWidgetContainer)<{ defraIndex: number }>`
  ${({ theme, defraIndex }) => theme.defraBackgrounds[serializeDefraIndex(defraIndex)]};
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
