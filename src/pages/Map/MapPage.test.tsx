import { places } from 'mocks/mockData';
import { ProvidersCombined } from 'ProvidersCombined';
import { PropsWithChildren } from 'react';
import { MapContainer, useMap } from 'react-leaflet';
import { render, renderHook, screen } from 'test-utils';
import { PlaceMarkers, PlaceMarkersTestIds } from './components/PlaceMarkers';
import { MapPage } from './MapPage';
import { MapPageTestIds } from './MapPageTestIds';

describe('Map page', () => {
  it('should render map container', async () => {
    render(<MapPage />);

    expect(await screen.findByTestId(MapPageTestIds.MapPage)).toBeInTheDocument();
  });
  it('should render place markers component', async () => {
    render(<MapPage />);

    const markers = await screen.findByTestId(PlaceMarkersTestIds.Container);

    expect(markers).toBeInTheDocument();
  });
  it('should center map dependent on current_location from localStorage', async () => {
    render(<MapPage />);

    let parsedLocalValue: [number, number] | undefined = undefined;

    const MapWrapper = ({ children }: PropsWithChildren) => (
      <ProvidersCombined>
        <MapContainer zoom={10} center={[0, 0]}>
          <PlaceMarkers boundsCoordinates="(0,0,0,0)" zoom={10} center={parsedLocalValue || undefined} />
          {children}
        </MapContainer>
      </ProvidersCombined>
    );

    const { result } = renderHook(() => useMap(), { wrapper: MapWrapper });
    const center = result.current.getCenter();
    expect(center).toMatchObject({ lat: 0, lng: 0 });

    const city = `[${places.elements[1].lat},${places.elements[1].lon}]`;
    localStorage.setItem('current_location', city);

    const localValue = localStorage.getItem('current_location');
    parsedLocalValue = localValue && JSON.parse(localValue);

    const { result: newResult } = renderHook(() => useMap(), { wrapper: MapWrapper });
    const newCenter = newResult.current.getCenter();

    expect(newCenter).toMatchObject({ lat: places.elements[1].lat, lng: places.elements[1].lon });
  });
});
