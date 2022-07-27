import { render, RenderOptions } from '@testing-library/react';
import { ProvidersCombined } from 'ProvidersCombined';
import { ReactElement } from 'react';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: ProvidersCombined, ...options });

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
export { customRender as render, mockNavigatorGeolocation };
