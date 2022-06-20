import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { FooterTestIds } from './FooterTestIds';

describe('Footer', () => {
  it('should render footer', () => {
    render(<Footer />);
    const footer = screen.getByTestId(FooterTestIds.Footer);
    expect(footer).toBeInTheDocument();
  });
  it('should render footer text', () => {
    render(<Footer />);
    const footer = screen.getByTestId(FooterTestIds.Footer);
    expect(footer).toHaveTextContent(/weatherly/i);
  });
  it('should render current year', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-01-01'));
    render(<Footer />);
    const year = screen.getByTestId(FooterTestIds.Footer);
    expect(year).toHaveTextContent('Weatherly - 2022');
  });
});
