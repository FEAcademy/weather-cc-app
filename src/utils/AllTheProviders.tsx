import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '../theme/ThemeProvider';

const queryClient = new QueryClient();

const AllTheProvider = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryClientProvider>
);

export { AllTheProvider };
