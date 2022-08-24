import { FavoritesProvider } from 'context/favorites';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'theme';

const queryClient = new QueryClient();

const ProvidersCombined = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <FavoritesProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </FavoritesProvider>
  </QueryClientProvider>
);

export { ProvidersCombined, queryClient };
