import { useGeoLocation } from 'hooks/useGeoLocation';
import { MapPin } from 'react-feather';
import { Button } from './GeolocationButton.styled';
import { GeolocationButtonTestIds } from './GeolocationButtonTestIds';

const GeolocationButton = () => {
  const [, getLocation] = useGeoLocation();

  return (
    <Button data-testid={GeolocationButtonTestIds.Button} onClick={getLocation}>
      <MapPin />
    </Button>
  );
};

export { GeolocationButton };
