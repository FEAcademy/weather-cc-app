import { MapPin } from 'react-feather';
import { Button } from './GeolocationButton.styled';
import { GeolocationButtonTestIds } from './GeolocationButtonTestIds';

const GeolocationButton = () => {
  return (
    <Button data-testid={GeolocationButtonTestIds.Button}>
      <MapPin />
    </Button>
  );
};

export { GeolocationButton };
