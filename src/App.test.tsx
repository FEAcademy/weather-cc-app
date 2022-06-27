
import App from 'App';
import { DataTestIDS } from 'utils/data-test-ids';
import { render, screen } from 'utils/test-utils';

import { AppContainer } from './components/AppContainer/AppContainer';

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

describe('Container component', () => { 
    it('should be rendered', () => {
        render(<AppContainer />);

        const container = screen.getByTestId(DataTestIDS.AppContainer);

        expect(container).toBeVisible();
    });
 });
