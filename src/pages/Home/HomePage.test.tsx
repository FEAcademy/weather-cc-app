import { queryClient } from 'App';
import { QueryClientProvider } from 'react-query';
import { render, screen } from 'theme/theme-test-utils';
import { HomePage } from './HomePage';
import { HomePageTestIds } from './HomePageTestIds';

describe('Home page', () => {
  it('should render title', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>,
    );

    expect(screen.getByTestId(HomePageTestIds.Title)).toHaveTextContent('Home page');
  });
});
