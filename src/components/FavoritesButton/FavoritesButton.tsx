import { MouseEvent } from 'react';
import { Button, HeartIcon } from './FavoritesButton.styled';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

interface Props {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoritesButton = ({ isFavorite, onClick }: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <Button data-testid={FavoritesButtonTestIds.Button} isActive={isFavorite} onClick={handleClick}>
      <HeartIcon />
    </Button>
  );
};

export { FavoritesButton };
