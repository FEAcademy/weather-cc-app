import Weather from 'api/services/Weather';
//import { useEffect } from 'react';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
//import { Location } from 'models/Location';
//import { weatherClient } from '../../api/clients';

import { inputStyles } from './AutocompleteInput.styled';
import { InputTestIds } from './AutocompleteInputTestIds';

const AutocompleteInput = () => {
  const [, setCityName] = useState<Select | null>(null);
  // ! inputValue should have its initial value filled from local storage
  const [inputValue, setInputValue] = useState('wroclaw');
  const { data } = Weather.useSearchCities(inputValue);
  interface Select {
    value: string;
    label: string;
  }

  const loadOptions = (inputValue: string, callback: (options: Select[]) => void) => {
    setInputValue(inputValue);

    if (data === undefined || data.length == 0) callback([]);
    else {
      const temp = data.map((cityName) => ({
        value: cityName,
        label: cityName,
      }));
      callback(temp);
    }
  };

  const onChange = (newValue: Select | null) => {
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
