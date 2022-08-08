import { weatherClient } from 'api/clients';
import { useCallback, useState } from 'react';
import { Coordinates } from 'models/Coordinates';
import { Geolocation } from 'models/Geolocation';
import { IpLookup } from 'models/IpLookup';

const useGeolocation = (): [Coordinates | null, () => void] => {
  const [geoLocation, setGeoLocation] = useState<Coordinates | null>(null);

  const onSuccess = useCallback((geolocation: Geolocation) => {
    setGeoLocation({
      latitude: geolocation.coords.latitude,
      longitude: geolocation.coords.longitude,
    });
  }, []);

  const onError = useCallback(async () => {
    const res = await weatherClient.get<IpLookup>('/ip.json', {
      params: {
        q: 'auto:ip',
      },
    });
    const { lat, lon } = res.data;
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
