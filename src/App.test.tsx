import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render navbar', () => {
    render(<App />);

    const navbar = screen.getByRole('contentinfo');

    expect(navbar).toBeInTheDocument();
  });
});
