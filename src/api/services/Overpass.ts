import { overPassClient } from 'api/clients';
import { useQuery } from 'react-query';
import { generateCacheKey } from 'utils/generateCacheKey';
import { serializeLayerQuery } from 'utils/serializeLayerQuery';
import { Place } from 'models/Place';

export default {
  usePlaces: (box: string, zoom: number) => {
    const query = serializeLayerQuery(zoom, box);

    const cacheKey = generateCacheKey(box);
    cacheKey.push(zoom);

    return useQuery<Place[], Error>(
      ['cities', cacheKey],
      async () => {
        const res = await overPassClient.post('/interpreter', query);
        return res.data.elements;
      },
      { enabled: !!box, refetchOnWindowFocus: false },
    );
  },
};
