interface Place {
  lat: number;
  lon: number;
  id: number;
  tags: {
    name: string;
  };
}

export type { Place };
