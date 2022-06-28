import App from 'App';
import { DataTestIDS } from 'utils/data-test-ids';
import { render, screen } from 'utils/test-utils';

describe('App', () => {
  it('should render navbar', () => {
    render(<App />);

    const navbar = screen.getByTestId(DataTestIDS.NavbarContainer);

    expect(navbar).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);

    const footer = screen.getByTestId(DataTestIDS.FooterContainer);

    expect(footer).toBeInTheDocument();
  });
});
