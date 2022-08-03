import { useEffect } from 'react';
import { MapPin } from 'react-feather';
import { serializeCoordinates } from 'utils/serializeCoordinates';
import { useGeolocation } from '../../hooks/useGeolocation';
import { Button } from './GeolocationButton.styled';
import { GeolocationButtonTestIds } from './GeolocationButtonTestIds';

interface Props {
  onGeolocation: (newGeolocation: string) => void;
}

const GeolocationButton = ({ onGeolocation }: Props) => {
  const [location, getLocation] = useGeolocation();

  useEffect(() => {
    if (location) onGeolocation(serializeCoordinates(location));
  }, [location, onGeolocation]);

  return (
    <Button data-testid={GeolocationButtonTestIds.Button} onClick={getLocation}>
      <MapPin />
    </Button>
  );
};

export { GeolocationButton };
