import { useState } from 'react';
import AsyncSelect from 'react-select/async';

import { Location } from 'models/Loction';
import { inputStyles } from './Input.styled';
import { InputTestIds } from './InputTestIds';

const Input = () => {
  const [cityName, setCityName] = useState('');

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

  const onInputChange = (value: string) => {
    setCityName(value);
  };

  const filterCities = (inputValue: string) => {
    const filteredCities = cities.filter((i) => i.name.toLowerCase().includes(inputValue.toLowerCase()));
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

  return (
    <div data-testid={InputTestIds.Input}>
      <AsyncSelect
        loadOptions={loadOptions}
        styles={inputStyles}
        inputValue={cityName}
        onInputChange={onInputChange}
        placeholder={'Search'}
      />
    </div>
  );
};

export { Input };
