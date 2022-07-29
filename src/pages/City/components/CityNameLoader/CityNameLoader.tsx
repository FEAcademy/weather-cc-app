import ContentLoader from 'react-content-loader';
import { CityNameLoaderTestIds } from './CityNameLoaderTestIds';

const CityNameLoader = () => {
  return (
    <ContentLoader
      data-testid={CityNameLoaderTestIds.Loader}
      style={{ marginBottom: '42px' }}
      speed={2}
      width={197}
      height={34}
      viewBox="0 0 197 34"
      backgroundColor="#e1e1e1"
      foregroundColor="#ececec"
    >
      <rect x="0" y="0" rx="8" ry="8" width="197" height="34" />
    </ContentLoader>
  );
};

export { CityNameLoader };
