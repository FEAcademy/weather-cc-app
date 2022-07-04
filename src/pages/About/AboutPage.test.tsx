import { render, screen } from '../../theme/theme-test-utils';
import { AboutPage } from './AboutPage';
import { AboutPageTestIds } from './AboutPageTestIds';

describe('AboutPage', () => {
  it('should render', () => {
    render(<AboutPage />);

    const aboutPage = screen.getByTestId(AboutPageTestIds.Container);

    expect(aboutPage).toBeInTheDocument();
  });
});
