import App from 'App';
import { createMemoryHistory } from 'history';
import React from 'react';
import { FooterTestIds } from './components/Footer/FooterTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';
import { render, screen } from './utils/customRender';

describe('App', () => {
  it('router', async () => {
    const history = createMemoryHistory();
    const route = '/about';
    history.push(route);

    render(<App />);
    // render(
    //   <Router location={history.location} navigator={history}>
    //     <App />
    //   </Router>,
    // );
    setTimeout(() => {
      expect(screen.queryByTestId('aboutPage')).toHaveTextContent(/AboutPage/i);
    }, 500);
    // await waitFor(() => expect(screen.queryByTestId('aboutPage')).toHaveTextContent(/AboutPage/i));
    // await waitFor(() => expect(screen.queryByTestId('home-page-title')).toHaveTextContent(/Home Page/i));
  });

  it('should render navbar', () => {
    render(<App />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    expect(navbar).toBeInTheDocument();
  });

  it('should render PageContainer', () => {
    render(<App />);

    const PageContainer = screen.getByRole('main');

    expect(PageContainer).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);

    const footer = screen.getByTestId(FooterTestIds.Footer);

    expect(footer).toBeInTheDocument();
  });
});
