import { useEffect, useState } from 'react';
import { Position } from 'models/Position';
import { GeoLocation } from '../models/GeoLocation';

const useGeoLocation = () => {
  const [canAskUserForLocation, setCanAskUserForLocation] = useState(false);
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

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError();
    }

    if (canAskUserForLocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, [canAskUserForLocation]);

  return [geoLocation, () => setCanAskUserForLocation(true)];
};

export { useGeoLocation };
