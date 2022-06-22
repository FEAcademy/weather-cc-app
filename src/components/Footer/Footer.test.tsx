import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2030-01-01'));

  it('should renders', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
  });

  it('should display date corectly', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toHaveTextContent('WEATHERLY - 2030');
  });
});
