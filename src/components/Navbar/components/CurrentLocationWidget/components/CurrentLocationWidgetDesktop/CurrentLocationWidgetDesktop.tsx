import ContentLoader from 'react-content-loader';

const CurrentLocationWidgetDesktop = () => {
  return (
    <ContentLoader
      speed={2}
      width={219}
      height={40}
      viewBox="0 0 219 40"
      backgroundColor="#e1e1e1"
      foregroundColor="#ececec"
    >
      <circle cx="20" cy="20" r="20" />
      <rect x="50" y="3" rx="8" ry="8" width="169" height="34" />
    </ContentLoader>
  );
};

export { CurrentLocationWidgetDesktop };
