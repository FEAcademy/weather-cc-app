import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component', () => {
    it('should render footer', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });
    it('should display logo text with current year: "WEATHERLY - 2012"', () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2012-01-01'));

        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toHaveTextContent(/WEATHERLY - 2012/i);
    });
});
