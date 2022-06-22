import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should render footer', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeVisible();
  });

  it('should render correct year in footer', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2021-01-27'));

    render(<Footer />);

    const year = screen.getByText('2021');

    expect(year).toBeInTheDocument();
  });
});
