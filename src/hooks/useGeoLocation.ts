import { useState } from 'react';
import { GeoLocation } from 'models/GeoLocation';
import { Position } from 'models/Position';

const useGeoLocation = (): [GeoLocation | null, () => void] => {
  const [geoLocation, setGeoLocation] = useState<GeoLocation | null>(null);

  const onSuccess = (position: Position) => {
    setGeoLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const onError = () => {
    setGeoLocation(null);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };

  return [geoLocation, getLocation];
};

export { useGeoLocation };
