import { render, screen } from 'test-utils';
import { NearestCitiesWeatherWidget } from './NearestCitiesWeatherWidget';
import { NearestCitiesWeatherWidgetTestIds } from './NearestCitiesWeatherWidgetTestIds';

describe('NearestCitiesWeatherWidget', () => {
  it('should render', async () => {
    render(<NearestCitiesWeatherWidget loading={false} cityName={undefined} />);

    const widget = screen.getByTestId(NearestCitiesWeatherWidgetTestIds.Widget);

    expect(widget).toBeInTheDocument();
  });
});
