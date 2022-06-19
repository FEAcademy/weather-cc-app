
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
    it('should be visible', () => {
        render(<Footer />);

        expect(screen.getByRole('footer')).toBeVisible();
    });

    it('should contains correct year', () => {        
        const customDate = new Date('2020-01-01');

        jest
            .useFakeTimers()
            .setSystemTime(customDate);

        render(<Footer />);

        expect(screen.getByRole('footer')).toHaveTextContent(customDate.getFullYear().toString());
    });

    it('should contains correct text', () => {
        render(<Footer />);

        expect(screen.getByRole('footer')).toHaveTextContent(/weatherly/i);
    });
});
