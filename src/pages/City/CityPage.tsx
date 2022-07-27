import { PageContentContainer } from 'components/PageContentContainer';
import { CityPageTestIds } from './CityPageTestIds';

const CityPage = () => {
  return <PageContentContainer data-testid={CityPageTestIds.Container}></PageContentContainer>;
};

export { CityPage };
