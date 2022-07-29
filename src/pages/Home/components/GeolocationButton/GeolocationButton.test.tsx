import userEvent from '@testing-library/user-event';
import * as geoLocationHooks from 'hooks/useGeoLocation';
import { positionData } from 'mocks/mockData';
import { mockNavigatorGeolocation } from 'test-utils';
import { render, screen } from 'utils';
import { GeolocationButton } from './GeolocationButton';
import { GeolocationButtonTestIds } from './GeolocationButtonTestIds';

describe('GeolocationButton', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call getLocation on click', async () => {
    const user = userEvent.setup();
    const getLocation = jest.fn();
    const updateSavedLocation = jest.fn();
    jest.spyOn(geoLocationHooks, 'useGeoLocation').mockReturnValue([null, getLocation]);

    render(<GeolocationButton updateSavedLocation={updateSavedLocation} />);

    await user.click(screen.getByTestId(GeolocationButtonTestIds.Button));

    expect(getLocation).toHaveBeenCalledTimes(1);
  });

  it('should call updateSavedLocation on location change', async () => {
    const user = userEvent.setup();
    const updateSavedLocation = jest.fn();

    const { getCurrentPositionMock } = mockNavigatorGeolocation();

    getCurrentPositionMock.mockImplementation((success) => success(positionData));

    render(<GeolocationButton updateSavedLocation={updateSavedLocation} />);

    await user.click(screen.getByTestId(GeolocationButtonTestIds.Button));

    expect(updateSavedLocation).toHaveBeenCalledWith(
      `${positionData.coords.latitude},${positionData.coords.longitude}`,
    );
  });
});
