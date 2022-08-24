import { render, screen } from 'test-utils';
// import { render, screen } from '@testing-library/react';
import { FavoritesCitiesWeatherWidget } from './FavoritesCitiesWeatherWidget';
import { FavoritesCitiesWeatherWidgetTestIds } from './FavoritesCitiesWeatherWidgetTestIds';

describe('FavoritesCitiesWeatherWidget', () => {
  it('should render', () => {
    render(<FavoritesCitiesWeatherWidget />);

    const container = screen.getByTestId(FavoritesCitiesWeatherWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });
});
