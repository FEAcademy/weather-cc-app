import ContentLoader from 'react-content-loader';
import { Container } from './ShortcutWidgetLoader.styled';
import { ShortcutWidgetLoaderTestIds } from './ShortcutWidgetLoaderTestIds';

const ShortcutWidgetLoader = () => {
  return (
    <Container data-testid={ShortcutWidgetLoaderTestIds.Loader}>
      <ContentLoader
        style={{ position: 'relative', top: '-37px' }}
        speed={2}
        width={160}
        height={160}
        viewBox="0 0 160 160"
        backgroundColor="#e1e1e1"
        foregroundColor="#ececec"
      >
        <circle cx="82" cy="37" r="37" />
        <rect x="18" y="80" rx="8" ry="8" width="124" height="46" />
        <rect x="18" y="136" rx="8" ry="8" width="124" height="24" />
      </ContentLoader>
    </Container>
  );
};

export { ShortcutWidgetLoader };
