import ContentLoader from 'react-content-loader';
import { Container } from './TemperatureWidget.styled';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

const TemperatureWidgetLoader = () => {
  return (
    <Container data-testid={TemperatureWidgetTestIds.Loader}>
      <ContentLoader
        speed={2}
        width={131}
        height={131}
        viewBox="0 0 131 131"
        backgroundColor="#e1e1e1"
        foregroundColor="#ececec"
      >
        <circle cx="65" cy="65" r="65" />
      </ContentLoader>
      <ContentLoader
        style={{ marginLeft: '12px' }}
        speed={2}
        width={197}
        height={131}
        viewBox="0 0 197 131"
        backgroundColor="#e1e1e1"
        foregroundColor="#ececec"
      >
        <rect x="0" y="0" rx="8" ry="8" width="197" height="25" />
        <rect x="0" y="33" rx="8" ry="8" width="197" height="65" />
        <rect x="0" y="106" rx="8" ry="8" width="197" height="25" />
      </ContentLoader>
    </Container>
  );
};

export { TemperatureWidgetLoader };
