import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'theme';

const queryClient = new QueryClient();

interface Props {
  client?: QueryClient;
}

const Provider = ({ children, client = queryClient }: PropsWithChildren<Props>) => (
  <QueryClientProvider client={client}>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryClientProvider>
);

export { Provider };
