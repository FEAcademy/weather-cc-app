import { render, RenderOptions } from '@testing-library/react';
import { ProvidersCombined } from 'ProvidersCombined';
import { PropsWithChildren, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Paths } from './enums/Paths';

interface Route {
  route?: Exclude<Paths, Paths.City> | '/city' | `/city/${string}`;
}

const AllProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <ProvidersCombined>{children}</ProvidersCombined>
    </BrowserRouter>
  );
};

const renderWithRouter = (
  ui: ReactElement,
  { route = Paths.Home }: Route = {},
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: AllProvidersWrapper, ...options }),
  };
};

const mockNavigatorGeolocation = () => {
  const getCurrentPositionMock = jest.fn();

  const geolocation = {
    getCurrentPosition: getCurrentPositionMock,
  };

  Object.defineProperty(global.navigator, 'geolocation', {
    value: geolocation,
  });

  return { getCurrentPositionMock };
};

export * from '@testing-library/react';
export { renderWithRouter as render, mockNavigatorGeolocation };
