import ContentLoader from 'react-content-loader';

const CurrentLocationWidgetMobile = () => {
  return (
    <ContentLoader
      speed={2}
      width={120}
      height={40}
      viewBox="0 0 120 30"
      backgroundColor="#e1e1e1"
      foregroundColor="#ececec"
    >
      <circle cx="30" cy="15" r="15" />
      <rect x="50" y="0" rx="8" ry="8" width="70" height="30" />
    </ContentLoader>
  );
};

export { CurrentLocationWidgetMobile };
