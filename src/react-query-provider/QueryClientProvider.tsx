import { PropsWithChildren } from 'react';
import { QueryClientProvider as ReactQueryQueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const QueryClientProvider = ({ children }: PropsWithChildren) => (
  <ReactQueryQueryClientProvider client={queryClient}>{children}</ReactQueryQueryClientProvider>
);

const TestQueryClientProvider = ({ children }: PropsWithChildren) => (
  <ReactQueryQueryClientProvider client={testQueryClient}>{children}</ReactQueryQueryClientProvider>
);

export { QueryClientProvider, TestQueryClientProvider };
