import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should render footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
  it('should render footer text', () => {
    render(<Footer />);
    const footerText = screen.getByRole('heading');
    expect(footerText).toHaveTextContent(/weatherly - /i);
  });
  it('should render current year', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-01-01'));
    render(<Footer />);
    const year = screen.getByRole('heading');
    expect(year).toHaveTextContent('Weatherly - 2022');
  });
});
