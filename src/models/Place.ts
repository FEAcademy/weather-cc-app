interface Place {
  lat: number;
  lon: number;
  id: number;
  tags: {
    name: string;
    population: string;
  };
}

export type { Place };
