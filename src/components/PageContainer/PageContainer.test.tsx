import { render, screen } from 'utils/test-utils';
import { PageContainer } from './PageContainer';

describe('PageContainer', () => {
  it('should render PageContainer', () => {
    render(<PageContainer />);

    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <PageContainer>
        <div>Children Element 123</div>
      </PageContainer>,
    );

    const childElement = screen.getByText(/Children Element 123/i);
    expect(childElement).toBeInTheDocument();
  });
});
