import { render, screen } from 'utils';

import { Footer } from './Footer';
import { FooterTestIds } from './FooterTestIds';

describe('Footer', () => {
  it('should render footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render correct footer text', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2016-01-01'));

    render(<Footer />);
    const footer = screen.getByTestId(FooterTestIds.Footer);
    expect(footer).toHaveTextContent(/weatherly - 2016/i);
  });
});
