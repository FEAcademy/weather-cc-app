import { overpassClient } from 'api/clients';
import { useQuery } from 'react-query';
import { generateCacheKey } from 'utils/generateCacheKey';
import { serializeQuery } from 'utils/serializeQuery';
import { Place } from 'models/Place';

export default {
  usePlaces: (box: string, zoom: number) => {
    const query = serializeQuery(zoom, box);

    const cacheKey = generateCacheKey(box);
    cacheKey.push(zoom);

    return useQuery<Place[], Error>(
      ['cities', cacheKey],
      async () => {
        const res = await overpassClient.post('/interpreter', query);

        const data = res.data.elements
          .sort((a: Place, b: Place) => Number(b.tags.population) - Number(a.tags.population))
          .slice(0, 15);

        return data;
      },
      { enabled: !!box, refetchOnWindowFocus: false },
    );
  },
  useNearestPlaces: (cityName: string, coordinates?: string) => {
    const query = `[out:json][timeout:25];
    (
      node["place"~"town|city"]["name"!="${cityName}"](around:50000,${coordinates});
    );
    out body 6;
    >;
    out skel qt;`;

    return useQuery<Place[], Error>(
      ['cities', cityName],
      async () => {
        const res = await overpassClient.post('/interpreter', query);

        return res.data.elements;
      },
      { enabled: !!cityName && !!coordinates, refetchOnWindowFocus: false },
    );
  },
};
