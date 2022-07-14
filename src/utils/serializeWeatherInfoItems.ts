interface Obj {
  value: string;
  label: string;
  unit: string;
}

const serializeWeatherInfoItems = (arr: Obj[]) => arr.map(({ value, label, unit }) => ({ label, value: value + unit }));

export { serializeWeatherInfoItems };
