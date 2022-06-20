import { render, screen } from '@testing-library/react';
import App from './App';
import { AppTestIds } from './AppTestIds';

describe('App', () => {
  it('should contains Navbar', () => {
    render(<App />);
    const footer = screen.getByTestId(AppTestIds.Footer);
    expect(footer).toBeInTheDocument();
  });
});
