import { overpassClient } from 'api/clients';
import { useQuery } from 'react-query';
import { convertSpecialCharacters } from 'utils/convertSpecialCharacters';
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
      { enabled: !!box, refetchOnWindowFocus: false, keepPreviousData: true },
    );
  },
  useNearestPlaces: (cityName: string, coordinates?: string) => {
    const query = `[out:json][timeout:25];
    (
      node["place"~"town|city"](around:50000,${coordinates});
    );
    out body 7;
    >;
    out skel qt;`;

    return useQuery<Place[], Error>(
      ['cities', cityName],
      async () => {
        const res = await overpassClient.post('/interpreter', query);

        const normalizedNearestPlaces = res.data.elements
          .map((city: Place) => {
            return { ...city, tags: { ...city.tags, name: convertSpecialCharacters(city.tags.name) } };
          })
          .filter((city: Place) => city.tags.name !== cityName)
          .sort((a: Place, b: Place) => Number(b.tags.population) - Number(a.tags.population))
          .slice(0, 6);

        return normalizedNearestPlaces;
      },
      { enabled: !!cityName && !!coordinates, refetchOnWindowFocus: false },
    );
  },
};
