import { TemperatureBox } from 'components/TemperatureBox';
import { WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => (
  <>
    <WidgetWrapper data-testid={HomePageTestIds.WidgetWrapper}>
      <TemperatureBox />
    </WidgetWrapper>
  </>
);

export { HomePage };
