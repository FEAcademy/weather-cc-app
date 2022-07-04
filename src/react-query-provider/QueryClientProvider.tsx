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

interface Props {
  client?: QueryClient;
}

const QueryClientProvider = ({ children, client = queryClient }: PropsWithChildren<Props>) => (
  <ReactQueryQueryClientProvider client={client}>{children}</ReactQueryQueryClientProvider>
);

const TestQueryClientProvider = ({ children, client = testQueryClient }: PropsWithChildren<Props>) => (
  <ReactQueryQueryClientProvider client={client}>{children}</ReactQueryQueryClientProvider>
);

export { QueryClientProvider, TestQueryClientProvider, queryClient };
