const generateCacheKey = (box: string) => {
  const coords = box.substring(1, box.length - 1).split(',');

  const coordsValues = coords.map((coord) => +Number(coord).toFixed(1));

  return coordsValues;
};

export { generateCacheKey };
