import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { FooterTestIds } from './FooterTestIds';

describe('Footer', () => {
  it('should renders', () => {
    render(<Footer />);

    const footer = screen.getByTestId(FooterTestIds.Container);

    expect(footer).toBeInTheDocument();
  });

  it('should display text and date corectly', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2020-01-01'));
    render(<Footer />);

    const footer = screen.getByTestId(FooterTestIds.Container);

    expect(footer).toHaveTextContent(/WEATHERLY - 2020/i);
  });
});
