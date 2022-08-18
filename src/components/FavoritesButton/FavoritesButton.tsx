import { add } from 'context/favorites';
import { useFavorites } from 'context/favorites/FavoritesProvider';
import { MouseEvent } from 'react';
import { Heart } from 'react-feather';
import { Button } from './FavoritesButton.styled';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

interface Props {
  cityName: string;
}

const FavoritesButton = ({ cityName }: Props) => {
  const { dispatch, checkIfIsFavorite } = useFavorites();

  const isFavorite = checkIfIsFavorite(cityName);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!isFavorite) dispatch(add(cityName));
  };

  return (
    <Button data-testid={FavoritesButtonTestIds.Button} active={isFavorite} onClick={handleClick}>
      <Heart size={13} />
    </Button>
  );
};

export { FavoritesButton };
