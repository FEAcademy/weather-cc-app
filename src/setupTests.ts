import '@testing-library/jest-dom';
import { server } from './mocks/server';
import { queryClient } from './ProvidersCombined';

beforeAll(() => {
  server.listen();
  window.scrollTo = jest.fn();
});
afterEach(() => {
  server.resetHandlers();
  queryClient.clear();
});
afterAll(() => server.close());
