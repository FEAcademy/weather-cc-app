import { Button, HeartIcon } from './FavoritesButton.styled';

interface Props {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoritesButton = ({ isFavorite, onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <HeartIcon isActive={isFavorite} />
    </Button>
  );
};

export { FavoritesButton };
