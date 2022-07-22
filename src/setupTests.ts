import '@testing-library/jest-dom';
import { queryClient } from 'ProvidersCombined';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  queryClient.clear();
});
afterAll(() => server.close());
