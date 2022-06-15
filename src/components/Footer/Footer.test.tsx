import { render, screen } from '@testing-library/react';
import { Footer } from './Footer.component';
import { FooterTestIds } from './FooterTestIds';

describe('Footer', () => {
  test('renders footer with current year', () => {
    render(<Footer />);

    expect(screen.getByTestId(FooterTestIds.Year)).toHaveTextContent(new Date().getFullYear().toString());
  });
});
