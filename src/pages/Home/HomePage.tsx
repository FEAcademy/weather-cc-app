import { TemperatureWidget } from 'components/TemperatureWidget';
import { Row, Content } from './HomePage.styled';

const HomePage = () => (
  <Content>
    <Row>
      <TemperatureWidget />
    </Row>
  </Content>
);

export { HomePage };
