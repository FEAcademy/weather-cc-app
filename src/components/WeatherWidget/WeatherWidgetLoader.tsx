import ContentLoader from 'react-content-loader';
import { Container } from './WeatherWidget.styled';

interface Props {
  testid: string;
}

const WeatherWidgetLoader = ({ testid }: Props) => (
  <Container data-testid={testid}>
    <ContentLoader speed={2} width={157} height={30} viewBox="0 0 157 30">
      <rect x="0" y="0" rx="8" ry="8" width="157" height="30" />
    </ContentLoader>
    <ContentLoader speed={2} width={157} height={30} viewBox="0 0 157 30">
      <rect x="0" y="0" rx="8" ry="8" width="157" height="30" />
    </ContentLoader>
    <ContentLoader speed={2} width={157} height={30} viewBox="0 0 157 30">
      <rect x="0" y="0" rx="8" ry="8" width="157" height="30" />
    </ContentLoader>
    <ContentLoader speed={2} width={157} height={30} viewBox="0 0 157 30">
      <rect x="0" y="0" rx="8" ry="8" width="157" height="30" />
    </ContentLoader>
    <ContentLoader speed={2} width={157} height={30} viewBox="0 0 157 30">
      <rect x="0" y="0" rx="8" ry="8" width="157" height="30" />
    </ContentLoader>
    <ContentLoader speed={2} width={157} height={30} viewBox="0 0 157 30">
      <rect x="0" y="0" rx="8" ry="8" width="157" height="30" />
    </ContentLoader>
  </Container>
);

export { WeatherWidgetLoader };
