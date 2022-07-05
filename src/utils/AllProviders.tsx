import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'theme/ThemeProvider';

const queryClient = new QueryClient();
const testClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

type Props = {
  client?: QueryClient;
};

const AllProviders = ({ children, client = queryClient }: PropsWithChildren<Props>) => (
  <QueryClientProvider client={client}>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryClientProvider>
);

const TestProviders = ({ children }: PropsWithChildren) => <AllProviders client={testClient}>{children}</AllProviders>;

export { AllProviders, TestProviders };
