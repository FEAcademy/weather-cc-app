import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { FooterTestIds } from './FooterTestIds';

describe('Footer component', () => {
    it('should be visible', () => {
        render(<Footer />);

        expect(screen.getByTestId(FooterTestIds.StyledFooter)).toBeInTheDocument();
    });

    it('should contains correct text and year', () => {        

        jest
            .useFakeTimers()
            .setSystemTime(new Date('2020-01-01'));

        render(<Footer />);

        expect(screen.getByTestId(FooterTestIds.StyledFooter)).toHaveTextContent(/WEATHERLY - 2020/i);
    });

});
