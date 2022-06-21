import { render, screen } from '@testing-library/react';
import { HomePage } from 'pages/Home';
import { HomePageTestIds } from 'pages/Home/HomePageTestIds';

describe('Home page', () => {
  it('should render title', () => {
    render(<HomePage />);

    expect(screen.getByTestId(HomePageTestIds.Title)).toHaveTextContent('Home page');
  });
});
