import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { FooterTestIds } from './FooterTestIds';

describe('Footer', () => {
  test('renders footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('renders footer text', () => {
    render(<Footer />);
    const footer = screen.getByTestId(FooterTestIds.Footer);
    expect(footer).toHaveTextContent(/weatherly/i);
  });

  test('renders current year', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-01-01'));

    render(<Footer />);
    const footer = screen.getByTestId(FooterTestIds.Footer);
    expect(footer).toHaveTextContent(/2023/);
  });
});
