import { Box } from 'components/Box';
import { Title } from 'components/Title';
import { DataTestIDS } from 'utils/data-test-ids';

const HomePage = () => (
  <>
    <Title data-testid={DataTestIDS.HomeTitle}>Home page</Title>
    <Box>Box content</Box>
  </>
);

export { HomePage };
