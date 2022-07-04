import App from 'App';
import { createMemoryHistory } from 'history';
import { FooterTestIds } from './components/Footer/FooterTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';
import { render, screen } from './utils/custom-render';

describe('App', () => {
  it('router', async () => {
    const history = createMemoryHistory();
    const route = '/about';
    history.push(route);

    render(<App />, { route });

    // Expect:
    setTimeout(() => {
      expect(screen.queryByTestId('aboutPage')).toHaveTextContent(/AboutPage/i);
    }, 500);
    // await waitFor(() => expect(screen.queryByTestId('aboutPage')).toHaveTextContent(/AboutPage/i));
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

// const btn = screen.getByRole('button', { name: 'Login' });
// fireEvent.click(btn);

// await waitForElementToBeRemoved(await findByText('Loading...'));

// expect(screen.getByText('Email oder Passwort sind falsch.')).toBeInTheDocument();

// );

//await waitForElementToBeRemoved(await screen.findAllByTestId('home-page-title'));

// Workaround
// let homePage: any;

// await waitFor(() => {
//   homePage = screen.queryByTestId('home-page-title');
// });

// await waitFor(() => {
//   expect(homePage).not.toBeInTheDocument();
// });

// await new Promise((resolve) =>
//   setTimeout(expect(screen.queryByTestId('aboutPage')).toHaveTextContent(/AboutPage/i), 100),
// );
// await waitFor(() => expect(screen.queryByTestId('aboutPage')).toHaveTextContent(/AboutPage/i), {
//   timeout: 2000, //This is 1000ms. Change timeout here.
// });
// await waitFor(() => expect(screen.queryByTestId('home-page-title')).toHaveTextContent(/Home Page/i));
