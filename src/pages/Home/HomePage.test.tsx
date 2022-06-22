import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';
import { HomePageTestIds } from './HomePageTestIds';

describe('Home page', () => {
  it('should render title', () => {
    render(<HomePage />);

    expect(screen.getByTestId(HomePageTestIds.Title)).toHaveTextContent('Home page');
  });
});
