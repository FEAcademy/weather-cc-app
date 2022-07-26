import { MapPin } from 'react-feather';
import { Button } from './GeolocationButton.styled';
import { GeolocationButtonTestIds } from './GeolocationButtonTestIds';

interface Props {
  onClick: () => void;
}

const GeolocationButton = ({ onClick }: Props) => {
  return (
    <Button data-testid={GeolocationButtonTestIds.Button} onClick={onClick}>
      <MapPin />
    </Button>
  );
};

export { GeolocationButton };
