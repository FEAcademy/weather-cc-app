import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should contain footer', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeVisible();
  });

  it('should render 2022 year in footer', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-01-27'));

    render(<Footer />);

    const year = screen.getByText('2022');

    expect(year).toBeInTheDocument();
  });
});
