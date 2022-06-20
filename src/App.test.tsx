import { render, screen } from '@testing-library/react';
import App from './App';
import { FooterTestIds } from './components/Footer/Footer.TestIds';

describe('App', () => {
  it('should render footer', () => {
    render(<App />);

    const footer = screen.getByTestId(FooterTestIds.Container);

    expect(footer).toBeInTheDocument();
  });
});
