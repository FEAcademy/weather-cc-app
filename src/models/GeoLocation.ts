interface GeoLocation {
  isLoaded: boolean;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export type { GeoLocation };
