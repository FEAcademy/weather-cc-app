import { render, screen } from 'test-utils';
import { theme } from 'theme';
import { FavoritesButton } from './FavoritesButton';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

describe('FavoritesButton', () => {
  it('should render', () => {
    const onClick = jest.fn();
    render(<FavoritesButton favorite={false} onClick={onClick} />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toBeInTheDocument();
  });

  it('should have initial color when city is not favorite', () => {
    const onClick = jest.fn();
    render(<FavoritesButton favorite={false} onClick={onClick} />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toHaveStyle(`color: ${theme.colors.text}`);
  });

  it('should change color when city is favorite', () => {
    const onClick = jest.fn();
    render(<FavoritesButton favorite={true} onClick={onClick} />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toHaveStyle('color: #DC5F44');
  });
});
