import ContentLoader from 'react-content-loader';
import { Container } from './CityWeatherShortcutLoader.styled';
import { CityWeatherShortcutLoaderTestIds } from './CityWeatherShortcutLoaderTestIds';

const CityWeatherShortcutLoader = () => {
  return (
    <Container data-testid={CityWeatherShortcutLoaderTestIds.Loader}>
      <ContentLoader
        style={{ position: 'relative', top: '-37px' }}
        speed={2}
        width={160}
        height={160}
        viewBox="0 0 160 165"
        backgroundColor="#e1e1e1"
        foregroundColor="#ececec"
      >
        <circle cx="80" cy="37" r="37" />
        <rect x="18" y="80" rx="8" ry="8" width="124" height="46" />
        <rect x="18" y="141" rx="8" ry="8" width="124" height="24" />
      </ContentLoader>
    </Container>
  );
};

export { CityWeatherShortcutLoader };
