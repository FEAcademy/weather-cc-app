import userEvent from '@testing-library/user-event';
import { render, screen } from 'test-utils';
import { FavoritesButton } from './FavoritesButton';

describe('FavoritesButton', () => {
  it('should render', () => {
    const handleClick = jest.fn();

    render(<FavoritesButton onClick={handleClick} isFavorite={true} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
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
