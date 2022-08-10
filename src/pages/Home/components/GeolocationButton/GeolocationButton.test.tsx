import userEvent from '@testing-library/user-event';
import { positionData } from 'mocks/mockData';
import { render, screen, mockNavigatorGeolocation } from 'test-utils';
import * as geolocationHooks from '../../hooks/useGeolocation/useGeolocation';
import { GeolocationButton } from './GeolocationButton';
import { GeolocationButtonTestIds } from './GeolocationButtonTestIds';

describe('GeolocationButton', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call getLocation on click', async () => {
    const user = userEvent.setup();
    const getLocation = jest.fn();
    const onGeolocation = jest.fn();
    jest.spyOn(geolocationHooks, 'useGeolocation').mockReturnValue([null, getLocation]);

    render(<GeolocationButton onGeolocation={onGeolocation} />);

    await user.click(screen.getByTestId(GeolocationButtonTestIds.Button));

    expect(getLocation).toHaveBeenCalledTimes(1);
  });

  it('should call onGeolocation on location change', async () => {
    const user = userEvent.setup();
    const onGeolocation = jest.fn();

    const { getCurrentPositionMock } = mockNavigatorGeolocation();

    getCurrentPositionMock.mockImplementation((success) => success(positionData));

    render(<GeolocationButton onGeolocation={onGeolocation} />);

    await user.click(screen.getByTestId(GeolocationButtonTestIds.Button));

    expect(onGeolocation).toHaveBeenCalledWith(`${positionData.coords.latitude},${positionData.coords.longitude}`);
  });
});
