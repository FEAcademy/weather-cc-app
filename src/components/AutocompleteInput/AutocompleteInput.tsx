//import Weather from 'api/services/Weather';
import { useEffect } from 'react';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { Location } from 'models/Location';
import { weatherClient } from '../../api/clients';

import { inputStyles } from './AutocompleteInput.styled';
import { InputTestIds } from './AutocompleteInputTestIds';

const AutocompleteInput = () => {
  const [, setCityName] = useState<Location | null>(null);
  // ! inputValue should have its initial value filled from local storage
  const [inputValue, setInputValue] = useState('Wro');
  //const { data } = Weather.useSearchCities(inputValue);
  const [data, setData] = useState<Location[] | undefined>(undefined);

  const getData = async (q: string) => {
    const resp = await weatherClient.get<Location[]>('/search.json', {
      params: {
        q: q,
        lang: 'pl',
      },
    });

    setData(resp.data);
  };

  useEffect(() => {
    getData(inputValue);
  }, [inputValue]);

  // const cities: Location[] = [
  //   {
  //     name: 'Wroclaw',
  //     country: 'Poland',
  //     id: 23,
  //     lat: 23,
  //     lon: 33,
  //     region: 'Poland',
  //     url: 'www.google.com',
  //   },
  // ];

  // const filterCities = (inputValue: string) => {
  //   const unifiedValue = inputValue.trim().toLowerCase();

  //   const filteredCities = cities.filter((i) => i.name.toLowerCase().includes(unifiedValue));
  //   const res = filteredCities.map((city) => {
  //     return {
  //       ...city,
  //       label: city.name,
  //     };
  //   });
  //   return res;
  // };

  const loadOptions = (inputValue: string, callback: (options: Location[]) => void) => {
    setInputValue(inputValue);

    let resp: Location[] = [];

    if (data === undefined) {
      resp = [] as Location[];
    } else if (data.length === 0) {
      resp = [] as Location[];
    } else {
      const temp = data.map((city) => {
        console.log({ ...city });
        return {
          ...city,
          label: city.name,
        };
      });
      resp = temp;
      console.log(temp);
    }

    console.log(resp);
    callback(resp);
  };

  const onChange = (newValue: Location | null) => {
    setCityName(newValue);
  };

  return (
    <div data-testid={InputTestIds.Input}>
      <AsyncSelect
        loadOptions={loadOptions}
        styles={inputStyles}
        placeholder={'Search'}
        onChange={onChange}
        isMulti={false}
      />
    </div>
  );
};

export { AutocompleteInput };
