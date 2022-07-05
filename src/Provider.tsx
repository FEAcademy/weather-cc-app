import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'theme';

const getQueryClient = (retry: boolean) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry,
      },
    },
  });

interface Props {
  retryQueries?: boolean;
}

const Provider = ({ children, retryQueries = true }: PropsWithChildren<Props>) => (
  <QueryClientProvider client={getQueryClient(retryQueries)}>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryClientProvider>
);

export { Provider };
