import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
    it('should be visible', () => {
        render(<Footer />);

        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should contains correct text and year', () => {        

        jest
            .useFakeTimers()
            .setSystemTime(new Date('2022-01-01'));

        render(<Footer />);

        expect(screen.getByRole('contentinfo')).toHaveTextContent(/WEATHERLY - 2022/i);
    });

});
