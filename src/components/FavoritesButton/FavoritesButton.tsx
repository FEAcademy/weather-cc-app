import { Button, HeartIcon } from './FavoritesButton.styled';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

interface Props {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoritesButton = ({ isFavorite, onClick }: Props) => {
  return (
    <Button data-testid={FavoritesButtonTestIds.Button} onClick={onClick}>
      <HeartIcon data-testid={FavoritesButtonTestIds.Icon} isActive={isFavorite} />
    </Button>
  );
};

export { FavoritesButton };
