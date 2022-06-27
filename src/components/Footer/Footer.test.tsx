import { screen } from '@testing-library/react';
import { DataTestIDS } from 'utils/data-test-ids';
import { render } from 'utils/test-utils';
import { Footer } from './Footer';

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
    const footer = screen.getByTestId(DataTestIDS.FooterContainer);
    expect(footer).toHaveTextContent(/weatherly - 2016/i);
  });
});
