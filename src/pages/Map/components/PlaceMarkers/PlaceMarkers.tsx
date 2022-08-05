import Overpass from 'api/services/Overpass';
import { Map } from 'leaflet';
import { useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { useDebouncedCallback } from 'use-debounce';
import { MarkerWeather } from '../MarkerWeather';

interface Props {
  boundsCoordinates: string;
  zoom: number;
}

const PlaceMarkers = ({ boundsCoordinates, zoom }: Props) => {
  const [mapData, setMapData] = useState<Props>({
    boundsCoordinates: boundsCoordinates,
    zoom: zoom,
  });
  const { data: places } = Overpass.usePlaces(mapData.boundsCoordinates, mapData.zoom);

  const onMapDebounce = useDebouncedCallback((boundsCoordinates: string, zoom: number) => {
    setMapData({
      boundsCoordinates,
      zoom,
    });
  }, 2000);

  const setMapPosition = (map: Map) => {
    const southWest = map.getBounds().getSouthWest();
    const northEast = map.getBounds().getNorthEast();
    const zoom = map.getZoom();
    const boundsCoordinates = `(${southWest.lat},${southWest.lng},${northEast.lat},${northEast.lng})`;
    onMapDebounce(boundsCoordinates, zoom);
  };

  const map = useMapEvents({
    zoomend: () => {
      setMapPosition(map);
    },
    dragend: () => {
      setMapPosition(map);
    },
  });

  return (
    <>
      {places &&
        places.map((place) => {
          return <MarkerWeather pos={[place.lat, place.lon]} cityName={place.tags.name} key={place.id} />;
        })}
    </>
  );
};

export { PlaceMarkers };
