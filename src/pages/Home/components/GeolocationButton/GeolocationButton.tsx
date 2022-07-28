import { useGeoLocation } from 'hooks/useGeoLocation';
import { useEffect } from 'react';
import { MapPin } from 'react-feather';
import { serializeCoordinates } from 'utils/serializeCoordinates';
import { Button } from './GeolocationButton.styled';
import { GeolocationButtonTestIds } from './GeolocationButtonTestIds';

interface Props {
  updateSavedLocation: (location: string) => void;
}

const GeolocationButton = ({ updateSavedLocation }: Props) => {
  const [location, getLocation] = useGeoLocation();

  useEffect(() => {
    if (location) updateSavedLocation(serializeCoordinates(location));
  }, [location, updateSavedLocation]);

  return (
    <Button data-testid={GeolocationButtonTestIds.Button} onClick={getLocation}>
      <MapPin />
    </Button>
  );
};

export { GeolocationButton };
