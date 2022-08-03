interface AutocompleteLocation {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

type AutocompleteOption = Pick<AutocompleteLocation, 'name' >;

export type { AutocompleteLocation, AutocompleteOption };
