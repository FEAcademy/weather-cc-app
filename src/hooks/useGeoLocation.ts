import { useEffect, useState } from 'react';
import { Position } from 'models/Position';
import { GeoLocation } from '../models/GeoLocation';

const useGeoLocation = (canAskUserForLocation: boolean) => {
  const [geoLocation, setGeoLocation] = useState<GeoLocation>({
    isLoaded: false,
    coordinates: { latitude: NaN, longitude: NaN },
  });

  const onSuccess = (position: Position) => {
    setGeoLocation({
      isLoaded: true,
      coordinates: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    });
  };

  const onError = () => {
    setGeoLocation({
      isLoaded: true,
      coordinates: { latitude: NaN, longitude: NaN },
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError();
    }

    if (canAskUserForLocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, [canAskUserForLocation]);

  return [geoLocation];
};

export { useGeoLocation };
