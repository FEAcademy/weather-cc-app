import '@testing-library/jest-dom';
import { server } from './mocks/server';
import { queryClient } from './ProvidersCombined';

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  queryClient.clear();
});
afterAll(() => server.close());
