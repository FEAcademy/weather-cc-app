import Overpass from 'api/services/Overpass';
import { Map } from 'leaflet';
import { useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { useDebouncedCallback } from 'use-debounce';
import { MapLoadingBar } from '../MapLoadingBar';
import { WeatherMarker } from '../WeatherMarker';
import { PlaceMarkersTestIds } from './PlaceMarkersTestIds';

interface Props {
  boundsCoordinates: string;
  zoom: number;
}

const PlaceMarkers = ({ boundsCoordinates, zoom }: Props) => {
  const [mapData, setMapData] = useState<Props>({
    boundsCoordinates: boundsCoordinates,
    zoom: zoom,
  });
  const { isLoading, isFetching, data: places } = Overpass.usePlaces(mapData.boundsCoordinates, mapData.zoom);

  const setMapPositionDebounce = useDebouncedCallback((map: Map) => {
    const mapBound = map.getBounds();
    const southWest = mapBound.getSouthWest();
    const northEast = mapBound.getNorthEast();
    const zoom = map.getZoom();
    const boundsCoordinates = `(${southWest.lat},${southWest.lng},${northEast.lat},${northEast.lng})`;
    setMapData({
      boundsCoordinates,
      zoom,
    });
  }, 1000);

  const map = useMapEvents({
    zoomend: () => setMapPositionDebounce(map),
    dragend: () => setMapPositionDebounce(map),
  });

  const renderContent = () => {
    if (isLoading) return <MapLoadingBar />;
    if (isFetching && places)
      return (
        <>
          <MapLoadingBar />
          {places.map((place) => (
            <WeatherMarker pos={[place.lat, place.lon]} cityName={place.tags.name} key={place.id} />
          ))}
        </>
      );
    if (places)
      return places.map((place) => (
        <WeatherMarker pos={[place.lat, place.lon]} cityName={place.tags.name} key={place.id} />
      ));
  };

  return <div data-testid={PlaceMarkersTestIds.Container}>{renderContent()}</div>;
};

export { PlaceMarkers };
