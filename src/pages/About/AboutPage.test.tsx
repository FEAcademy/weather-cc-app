import { render, screen } from '../../utils/custom-render';
import { AboutPage } from './AboutPage';

describe('About page', () => {
  it('should render', () => {
    render(<AboutPage />);
    expect(screen.getByText(/Aboutpage/i)).toBeInTheDocument();
  });
});
