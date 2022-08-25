const generateCacheKey = (box: string) => {
  const coords = box.substring(1, box.length - 1).split(',');
  
  const coordsValues = coords.map((coord) => Number(coord.slice(0,4)));

  return coordsValues;
};

export { generateCacheKey };
