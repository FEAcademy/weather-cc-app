import { Button, HeartIcon } from './FavoritesButton.styled';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

interface Props {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoritesButton = ({ isFavorite, onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <HeartIcon data-testid={FavoritesButtonTestIds.icon} isActive={isFavorite} />
    </Button>
  );
};

export { FavoritesButton };
