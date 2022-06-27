import { render, screen } from 'theme/theme-test-utils';
import { PageContainer } from './PageContainer';

describe('PageContainer', () => {
    it('should render PageContainer with children text: "Children Element 123"', () => {
        render(<PageContainer>
            <div>Children Element 123</div>
        </PageContainer>);
        const containerElement = screen.getByText(/Children Element 123/i);
        expect(containerElement).toBeInTheDocument();
    });
});
