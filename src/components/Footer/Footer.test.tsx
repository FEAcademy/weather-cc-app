import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { FooterTestIds } from './Footer.TestIds';

describe('Footer', () => {
  it('should renders', () => {
    render(<Footer />);

    const footer = screen.getByTestId(FooterTestIds.Container);

    expect(footer).toBeInTheDocument();
  });

  it('should display date corectly', () => {
    render(<Footer />);

    jest.useFakeTimers().setSystemTime(new Date('2022-01-01'));

    const footer = screen.getByTestId(FooterTestIds.Container);

    expect(footer).toHaveTextContent('WEATHERLY - 2022');
  });
});
