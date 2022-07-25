import { PageContentContainer } from 'components/PageContentContainer';
import { SingleLocationTestIds } from './SingleLocationPageTestIds';

const SingleLocationPage = () => {
  return <PageContentContainer data-testid={SingleLocationTestIds.Container}></PageContentContainer>;
};

export { SingleLocationPage };
