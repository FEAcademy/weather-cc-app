import { Box } from 'components/Box';
import { TemperatureBox } from 'components/TemperatureBox';
import { Title } from 'components/Title';
import { WidgetWrpper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => (
  <>
    <Title data-testid={HomePageTestIds.Title}>Home page</Title>
    <WidgetWrpper>
      <Box>Box content</Box>
      <TemperatureBox data-testid={HomePageTestIds.TemperatureBox} />
    </WidgetWrpper>
  </>
);

export { HomePage };
