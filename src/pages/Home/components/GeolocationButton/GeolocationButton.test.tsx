import * as geoLocationHooks from 'hooks/useGeoLocation';
import { render, screen, fireEvent } from 'utils';
import { GeolocationButton } from './GeolocationButton';
import { GeolocationButtonTestIds } from './GeolocationButtonTestIds';

describe('GeolocationButton', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call getLocation on click', async () => {
    const getLocation = jest.fn();
    jest.spyOn(geoLocationHooks, 'useGeoLocation').mockReturnValue([null, getLocation]);

    render(<GeolocationButton />);

    fireEvent.click(screen.getByTestId(GeolocationButtonTestIds.Button));

    expect(getLocation).toHaveBeenCalledTimes(1);
  });
});
