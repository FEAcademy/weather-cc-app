import { MapPin } from 'react-feather';
import { Button } from './GeolocationButton.styled';

const GeolocationButton = () => {
  return (
    <Button>
      <MapPin />
    </Button>
  );
};

export { GeolocationButton };
