import { Box } from 'components/Box';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget/TemperatureWidgetTestIds';
import { Title } from 'components/Title';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => (
  <>
    <Title data-testid={HomePageTestIds.Title}>Home page</Title>
    <Box>Box content</Box>
    <TemperatureWidget data-testid={TemperatureWidgetTestIds.container} />
  </>
);
export { HomePage };
