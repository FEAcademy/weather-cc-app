import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'theme';

const queryClient = new QueryClient();
const testClient = new QueryClient();

interface Props {
  client?: QueryClient;
}

const Provider = ({ children, client = queryClient }: PropsWithChildren<Props>) => (
  <QueryClientProvider client={client}>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryClientProvider>
);

const TestProvider = ({ children }: PropsWithChildren) => <Provider client={testClient}>{children}</Provider>;

export { Provider, TestProvider };
