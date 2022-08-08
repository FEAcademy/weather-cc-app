interface IpLookup {
  city: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  geoname_id: number;
  ip: string;
  is_eu: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  region: string;
  type: string;
  tz_id: string;
}

export type { IpLookup };
