import { Box } from 'components/Box';
import { TemperatureBox } from 'components/TemperatureBox';
import { Title } from 'components/Title';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => (
  <>
    <Title data-testid={HomePageTestIds.Title}>Home page</Title>
    <Box>Box content</Box>
    <TemperatureBox />
  </>
);

export { HomePage };
