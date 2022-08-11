import { render, screen } from 'test-utils';
import { theme } from 'theme';
import { FavoritesButton } from './FavoritesButton';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

describe('FavoritesButton', () => {
  it('should render', () => {
    render(<FavoritesButton isFavorite={false} />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toBeInTheDocument();
  });

  it('should have initial color when city is not favorite', () => {
    render(<FavoritesButton isFavorite={false} />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toHaveStyle(`color: ${theme.colors.text}`);
  });

  it('should change color when city is favorite', () => {
    render(<FavoritesButton isFavorite={true} />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toHaveStyle('color: #DC5F44');
  });
});
