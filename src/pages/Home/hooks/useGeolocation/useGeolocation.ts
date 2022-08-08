import Weather from 'api/services/Weather';
import { useCallback, useState } from 'react';
import { Coordinates } from 'models/Coordinates';
import { Geolocation } from 'models/Geolocation';

const useGeolocation = (): [Coordinates | null, () => void] => {
  const [geoLocation, setGeoLocation] = useState<Coordinates | null>(null);

  const onSuccess = useCallback((geolocation: Geolocation) => {
    setGeoLocation({
      latitude: geolocation.coords.latitude,
      longitude: geolocation.coords.longitude,
    });
  }, []);

  const onError = useCallback(async () => {
    const { lat, lon } = await Weather.sendIpLookup();
    setGeoLocation({
      latitude: lat,
      longitude: lon,
    });
  }, []);

  const getLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, [onError, onSuccess]);

  return [geoLocation, getLocation];
};

export { useGeolocation };
