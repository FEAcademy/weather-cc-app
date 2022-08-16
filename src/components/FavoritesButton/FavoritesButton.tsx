import { MouseEvent } from 'react';
import { Heart } from 'react-feather';
import { Button } from './FavoritesButton.styled';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

interface Props {
  favorite: boolean;
  onClick: () => void;
}

const FavoritesButton = ({ favorite, onClick }: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <Button data-testid={FavoritesButtonTestIds.Button} active={favorite} onClick={handleClick}>
      <Heart size={13} />
    </Button>
  );
};

export { FavoritesButton };
