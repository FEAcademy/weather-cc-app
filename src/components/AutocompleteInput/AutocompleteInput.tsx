import Weather from 'api/services/Weather';
import React, { useState } from 'react';

import AsyncSelect from 'react-select/async';
import { Select } from 'models/Select';
import { inputStyles } from './AutocompleteInput.styled';
import { InputTestIds } from './AutocompleteInputTestIds';

interface Props {
  handleSelect: (newValue: Select | null) => void;
  savedLocation: string;
}

const AutocompleteInput = ({ handleSelect, savedLocation }: Props) => {
  const [inputValue, setInputValue] = useState(savedLocation);
  const { data } = Weather.useSearchCities(inputValue);

  
  const loadOptions = (inputValue: string) => {
    setInputValue(inputValue);
    const filteredData = data?.map((cityName) => ({
      value: cityName,
      label: cityName,
    })) || [];

    console.log(inputValue,filteredData);
    return Promise.resolve(filteredData); // .filter(e => e.label.includes(inputValue)))
  };

  return (
    <div data-testid={InputTestIds.Input}>
      <AsyncSelect
        loadOptions={loadOptions}
        styles={inputStyles}
        placeholder="Search"
        onChange={(newValue: Select | null) => handleSelect(newValue)}
        isMulti={false}
        name="cities"
        inputId="cities"
        defaultInputValue={savedLocation}
      />
    </div>
  );
};

export { AutocompleteInput };
