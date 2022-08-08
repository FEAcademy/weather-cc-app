const serializeQuery = (zoom: number, bounds: string): string => {
  let places = 'city';

  if (zoom >= 13) places = 'city|town|village';
  if (zoom >= 10 && zoom <= 12) places = 'city|town';

  const newQuery = `
  [out:json][timeout:50];
  (
    node["place"~"${places}"]${bounds};
  );
  out;
  >;
  out skel qt;`;

  return newQuery;
};

export { serializeQuery };
