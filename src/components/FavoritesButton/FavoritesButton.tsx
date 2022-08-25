import { add } from 'context/favorites';
import { useFavorites } from 'context/favorites/FavoritesProvider';
import { ButtonTypes } from 'enums/ButtonTypes';
import { MouseEvent } from 'react';
import { Heart } from 'react-feather';
import { Button } from './FavoritesButton.styled';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

interface Props {
  cityName: string;
  size: number;
  type: ButtonTypes;
}

const FavoritesButton = ({ cityName, size, type }: Props) => {
  const { dispatch, checkIfIsFavorite } = useFavorites();

  const isFavorite = checkIfIsFavorite(cityName);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isFavorite) dispatch(add(cityName));
  };

  let icon = <></>;

  if (type === ButtonTypes.Heart) {
    icon = <Heart size={size} />;
  }

  return (
    <Button data-testid={FavoritesButtonTestIds.Button} active={isFavorite} onClick={handleClick}>
      {icon}
    </Button>
  );
};

export { FavoritesButton };
