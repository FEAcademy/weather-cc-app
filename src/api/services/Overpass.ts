import { overPassClient } from 'api/clients';
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
        const res = await overPassClient.post('/interpreter', query);

        const data = res.data.elements
          .sort((a: Place, b: Place) => Number(b.tags.population) - Number(a.tags.population))
          .slice(0, 15);

        return data;
      },
      { enabled: !!box, refetchOnWindowFocus: false },
    );
  },
};
