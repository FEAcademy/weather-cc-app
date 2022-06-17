import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { FooterTestIds } from './FooterTestIds';

describe('Footer', () => {
  it('should contain footer', () => {
    render(<Footer />);

    const footer = screen.getByTestId(FooterTestIds.Footer);

    expect(footer).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<Footer />);

    const footer = screen.getByTestId(FooterTestIds.Footer);

    expect(footer).toBeVisible();
  });

  it('should render 2022 year in footer', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-01-27'));

    render(<Footer />);

    const year = screen.getByTestId(FooterTestIds.Year);

    expect(year).toHaveTextContent('2022');
  });
});
