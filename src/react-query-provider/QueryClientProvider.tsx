import { PropsWithChildren } from 'react';
import { QueryClientProvider as ReactQueryClientProvider, QueryClient } from 'react-query';

const queryClient = (isRetry: boolean) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: isRetry,
      },
    },
  });

type ProviderProps = {
  isRetry?: boolean;
};
const QueryClientProvider = ({ children, isRetry = true }: PropsWithChildren<ProviderProps>) => (
  <ReactQueryClientProvider client={queryClient(isRetry)}>{children}</ReactQueryClientProvider>
);

export { QueryClientProvider };
