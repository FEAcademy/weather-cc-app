import { TemperatureWidget } from 'components/TemperatureWidget';
import { WidgetsContainer } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => (
  <>
    <WidgetsContainer data-testid={HomePageTestIds.WidgetsContainer}>
      <TemperatureWidget />
    </WidgetsContainer>
  </>
);
export { HomePage };
