const serializeQuery = (zoom: number, bounds: string): string => {
  let places = ['city'];

  if (zoom >= 13) places = ['village', 'town', 'city'];
  if (zoom >= 10 && zoom <= 12) places = ['town', 'city'];

  const newLayerQuery = places.reduce((reducer, place) => {
    return reducer + `\n node["place"="${place}"]${bounds};`;
  }, '');

  const query = `
    [out:json][timeout:25];
    (${newLayerQuery});
    out;
    >;
    out skel qt;
  `;
  const newQuery = 'data=' + encodeURIComponent(query);

  return newQuery;
};

export { serializeQuery };
