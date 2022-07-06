import { TemperatureWidget } from 'components/TemperatureWidget';
import { Row, Content, Heading, Section } from './HomePage.styled';

const HomePage = () => (
  <Content>
    <Section>
      <Heading>Katowice</Heading>
      <Row>
        <TemperatureWidget />
      </Row>
    </Section>
  </Content>
);

export { HomePage };
