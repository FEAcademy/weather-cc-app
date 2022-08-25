import { add, remove } from 'context/favorites';
import { useFavorites } from 'context/favorites/FavoritesProvider';
import { MouseEvent } from 'react';
import { Heart } from 'react-feather';
import { Button } from './FavoritesButton.styled';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

interface Props {
  cityName: string;
  size: number;
}

const FavoritesButton = ({ cityName, size }: Props) => {
  const { dispatch, checkIfIsFavorite } = useFavorites();

  const isFavorite = checkIfIsFavorite(cityName);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isFavorite) dispatch(add(cityName));
    else dispatch(remove(cityName));
  };

  return (
    <Button data-testid={FavoritesButtonTestIds.Button} active={isFavorite} onClick={handleClick}>
      <Heart size={size} />
    </Button>
  );
};

export { FavoritesButton };
