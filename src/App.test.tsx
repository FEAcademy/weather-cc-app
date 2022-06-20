import { render, screen } from '@testing-library/react';
import App from 'App';
import { FooterTestIds } from 'components/Footer/FooterTestIds';

describe('App', () => {
  test('should render footer', () => {
    render(<App />);

    const footer = screen.getByTestId(FooterTestIds.Footer);

    expect(footer).toBeInTheDocument();
  });
});
