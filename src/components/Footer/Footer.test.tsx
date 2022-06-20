import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  test('renders footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeVisible();
  });

  test('renders footer text', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent(/weatherly/i);
  });

  test('renders logo and current year', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-01-01'));

    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent('WEATHERLY - 2023');
  });
});
