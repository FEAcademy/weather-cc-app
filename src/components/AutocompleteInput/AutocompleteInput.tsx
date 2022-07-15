import AsyncSelect from 'react-select/async';

import { Location } from 'models/Location';
import { inputStyles } from './AutocompleteInput.styled';
import { InputTestIds } from './AutocompleteInputTestIds';

interface Props {
  handleSelect: (cityName: string) => void;
}

const AutocompleteInput = ({ handleSelect }: Props) => {
  const cities: Location[] = [
    {
      name: 'Wroclaw',
      country: 'Poland',
      id: 23,
      lat: 23,
      lon: 33,
      region: 'Poland',
      url: 'www.google.com',
    },
    {
      name: 'Warszawa',
      country: 'Poland',
      id: 24,
      lat: 25,
      lon: 32,
      region: 'Poland',
      url: 'www.google.com',
    },
    {
      name: 'Walbrzych',
      country: 'Poland',
      id: 25,
      lat: 21,
      lon: 32,
      region: 'Poland',
      url: 'www.google.com',
    },
  ];

  const filterCities = (inputValue: string) => {
    const unifiedValue = inputValue.trim().toLowerCase();

    const filteredCities = cities.filter((i) => i.name.toLowerCase().includes(unifiedValue));
    const res = filteredCities.map((city) => {
      return {
        ...city,
        label: city.name,
      };
    });
    return res;
  };

  const loadOptions = (inputValue: string, callback: (options: Location[]) => void) => {
    setTimeout(() => {
      callback(filterCities(inputValue));
    }, 1000);
  };

  const onChange = (newValue: Location | null) => {
    handleSelect(newValue!.name);
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
