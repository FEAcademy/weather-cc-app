import { Heart } from 'react-feather';
import { Button } from './FavoritesButton.styled';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

interface Props {
  isFavorite: boolean;
}

const FavoritesButton = ({ isFavorite }: Props) => {
  return (
    <Button data-testid={FavoritesButtonTestIds.Button} active={isFavorite}>
      <Heart size={13} />
    </Button>
  );
};

export { FavoritesButton };
