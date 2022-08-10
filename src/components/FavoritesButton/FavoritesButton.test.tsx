import userEvent from '@testing-library/user-event';
import { render, screen } from 'test-utils';
import { theme } from 'theme';
import { FavoritesButton } from './FavoritesButton';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

describe('FavoritesButton', () => {
  it('should render', () => {
    const handleClick = jest.fn();

    render(<FavoritesButton onClick={handleClick} isFavorite={true} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should have initial color when city is not favorite', () => {
    const handleClick = jest.fn();

    render(<FavoritesButton onClick={handleClick} isFavorite={false} />);

    const icon = screen.getByTestId(FavoritesButtonTestIds.icon);

    expect(icon).toHaveStyle(`color: ${theme.colors.text}`);
  });

  it('should change color when city isFavorite', () => {
    const handleClick = jest.fn();

    render(<FavoritesButton onClick={handleClick} isFavorite={true} />);

    const icon = screen.getByTestId(FavoritesButtonTestIds.icon);

    expect(icon).toHaveStyle('color: #DC5F44');
  });

  it('should call function after button click', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<FavoritesButton onClick={handleClick} isFavorite={true} />);

    const button = screen.getByRole('button');

    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
