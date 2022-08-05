import { serializeQuery } from './serializeQuery';

const getQuery = (newLayerQuery: string) => {
  return `
  [out:json][timeout:25];
  (
    ${newLayerQuery};
  );
  out;
  >;
  out skel qt;`;
};

describe('serializeQuery', () => {
  const bounds = '(50.72167742756552,16.311950683593754,51.48993452350156,17.76351928710938)';

  it('should return valid query for zoom that returns towns and cities', () => {
    const newLayerQuery = `node["place"~"city"]${bounds}`;
    const query = getQuery(newLayerQuery);
    expect(serializeQuery(9, bounds)).toBe(query);
  });

  it('should return valid query for zoom that returns villages, towns and cities', () => {
    const newLayerQuery = `node["place"~"city|town"]${bounds}`;
    const query = getQuery(newLayerQuery);
    expect(serializeQuery(12, bounds)).toBe(query);
  });

  it('should return valid query for zoom that returns cities', () => {
    const newLayerQuery = `node["place"~"city|town|village"]${bounds}`;
    const query = getQuery(newLayerQuery);
    expect(serializeQuery(13, bounds)).toBe(query);
  });
});
