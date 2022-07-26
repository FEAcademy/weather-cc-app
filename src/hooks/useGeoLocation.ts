import { useState } from 'react';
import { Coordinates } from 'models/Coordinates';
import { GeoLocation } from 'models/GeoLocation';

const useGeoLocation = (): [Coordinates | null, () => void] => {
  const [geoLocation, setGeoLocation] = useState<Coordinates | null>(null);

  const onSuccess = (geolocation: GeoLocation) => {
    setGeoLocation({
      latitude: geolocation.coords.latitude,
      longitude: geolocation.coords.longitude,
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
