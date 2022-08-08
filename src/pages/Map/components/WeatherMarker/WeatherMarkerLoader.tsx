import { WeatherIconLoader, WeatherTextLoader } from './WeatherMarker.styled';
import { WeatherMarkerTestIds } from './WeatherMarkerTestIds';

const WeatherMarkerLoader = () => {
  return (
    <div data-testid={WeatherMarkerTestIds.Loader}>
      <WeatherIconLoader
        speed={2}
        width={50}
        height={50}
        viewBox="0 0 50 50"
        backgroundColor="#e1e1e1"
        foregroundColor="#ececec"
      >
        <circle cx="25" cy="25" r="25" />
      </WeatherIconLoader>
      <WeatherTextLoader
        speed={2}
        width={84}
        height={60}
        viewBox="0 0 84 60"
        backgroundColor="#e1e1e1"
        foregroundColor="#ececec"
      >
        <rect x="0" y="0" rx="8" ry="8" width="84" height="35" />
        <rect x="0" y="40" rx="8" ry="8" width="84" height="20" />
      </WeatherTextLoader>
    </div>
  );
};

export { WeatherMarkerLoader };
