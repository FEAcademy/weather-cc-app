import { serializeQuery } from './serializeQuery';

const getQuery = (newLayerQuery: string) => {
  return `
    [out:json][timeout:25];
    (${newLayerQuery});
    out;
    >;
    out skel qt;`;
};

describe('serializeQuery', () => {
  const bounds = '(50.72167742756552,16.311950683593754,51.48993452350156,17.76351928710938)';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return valid query for zoom that returns towns and cities', () => {
    const newLayerQuery = `node["place"="town"]["place"="city"]${bounds}`;
    const query = getQuery(newLayerQuery);

    jest.spyOn(global, 'encodeURIComponent').mockImplementationOnce(() => query);

    const result = 'data=' + query;
    expect(serializeQuery(10, bounds)).toBe(result);
  });

  it('should return valid query for zoom that returns villages, towns and cities', () => {
    const newLayerQuery = `node["place"="village"]["place"="town"]["place"="city"]${bounds}`;
    const query = getQuery(newLayerQuery);

    jest.spyOn(global, 'encodeURIComponent').mockImplementationOnce(() => query);

    const result = 'data=' + query;
    expect(serializeQuery(13, bounds)).toBe(result);
  });

  it('should return valid query for zoom that returns cities', () => {
    const newLayerQuery = `node["place"="city"]${bounds}`;
    const query = getQuery(newLayerQuery);

    jest.spyOn(global, 'encodeURIComponent').mockImplementationOnce(() => query);

    const result = 'data=' + query;
    expect(serializeQuery(13, bounds)).toBe(result);
  });
});
