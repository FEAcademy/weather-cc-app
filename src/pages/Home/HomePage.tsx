import { TemperatureBox } from 'components/TemperatureBox';
import { WidgetWrpper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => (
  <>
    <WidgetWrpper data-testid={HomePageTestIds.WidgetWrpper}>
      <TemperatureBox />
    </WidgetWrpper>
  </>
);

export { HomePage };
