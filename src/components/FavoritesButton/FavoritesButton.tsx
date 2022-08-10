import { Button, HeartIcon } from './FavoritesButton.styled';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

interface Props {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoritesButton = ({ isFavorite, onClick }: Props) => {
  return (
    <Button data-testid={FavoritesButtonTestIds.Button} isActive={isFavorite} onClick={onClick}>
      <HeartIcon />
    </Button>
  );
};

export { FavoritesButton };
