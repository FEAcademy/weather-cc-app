import { render, screen } from 'theme/theme-test-utils';
import { PageContainer } from './PageContainer';

describe('PageContainer', () => {
    it('should render', () => {
        render(<PageContainer>
            <></>
        </PageContainer>);

        const containerElement = screen.getByRole('main');
        expect(containerElement).toBeInTheDocument();
    });
});
