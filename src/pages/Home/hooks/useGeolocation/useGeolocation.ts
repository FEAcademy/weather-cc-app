import Weather from 'api/services/Weather';
import { useCallback, useState } from 'react';
import { Coordinates } from 'models/Coordinates';
import { Geolocation } from 'models/Geolocation';

const useGeolocation = (): [Coordinates | null, () => void] => {
  const [geoLocation, setGeoLocation] = useState<Coordinates | null>(null);
  const { refetch } = Weather.useIpLookup();

  const onSuccess = useCallback((geolocation: Geolocation) => {
    setGeoLocation({
      latitude: geolocation.coords.latitude,
      longitude: geolocation.coords.longitude,
    });
  }, []);

  const onError = useCallback(async () => {
    const { data } = await refetch();
    if (data)
      setGeoLocation({
        latitude: data.lat,
        longitude: data.lon,
      });
  }, [refetch]);

  const getLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, [onError, onSuccess]);

  return [geoLocation, getLocation];
};

export { useGeolocation };
