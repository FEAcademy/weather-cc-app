import ContentLoader from 'react-content-loader';
import { Container } from './WeatherWidget.styled';

interface Props {
  'data-testid': string;
}

const WeatherWidgetLoader = ({ ...props }: Props) => {
  const content = [...Array(6)].map((_, id) => {
    return (
      <ContentLoader
        key={id}
        speed={2}
        width={157}
        height={30}
        viewBox="0 0 157 30"
        backgroundColor="#e1e1e1"
        foregroundColor="#ececec"
      >
        <rect x="0" y="0" rx="8" ry="8" width="157" height="30" />
      </ContentLoader>
    );
  });

  return <Container {...props}>{content}</Container>;
};

export { WeatherWidgetLoader };
