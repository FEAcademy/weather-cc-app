import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { FooterTestIds } from './FooterTestIds';

describe('Footer', () => {
  it('should render 2022 year', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-01-27'));

    render(<Footer />);

    const year = screen.getByTestId(FooterTestIds.Year);

    expect(year).toHaveTextContent('2022');
  });

  it('should render 2100 year', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2100-01-27'));

    render(<Footer />);

    const year = screen.getByTestId(FooterTestIds.Year);

    expect(year).toHaveTextContent('2100');
  });
});
