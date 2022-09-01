import { add } from 'context/favorites';
import { useFavorites } from 'context/favorites/FavoritesProvider';
import { Icons } from 'enums/Icons';
import { MouseEvent } from 'react';
import { Heart } from 'react-feather';
import { Button } from './FavoritesButton.styled';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

interface Props {
  cityName: string;
  size: number;
  icon: Icons;
}

const FavoritesButton = ({ cityName, size, icon }: Props) => {
  const { dispatch, checkIfIsFavorite } = useFavorites();

  const isFavorite = checkIfIsFavorite(cityName);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isFavorite) dispatch(add(cityName));
  };

  const renderIcon = () => {
    if (icon === Icons.Heart) {
      return <Heart size={size} />;
    }
  };

  return (
    <Button data-testid={FavoritesButtonTestIds.Button} active={isFavorite} onClick={handleClick}>
      {renderIcon()}
    </Button>
  );
};

export { FavoritesButton };
