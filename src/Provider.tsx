import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryQlient = new QueryClient();

const Provider = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryQlient}>{children}</QueryClientProvider>
);

export { Provider };
