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
  const [inputValue, setInputValue] = useState<string>(savedLocation);
  const { data } = Weather.useSearchCities(inputValue);

  const loadOptions = (inputValue: string) => {
    setInputValue(inputValue);

    let optionsData = [] as Select[];

    if (data) {
      optionsData = data.map((cityName) => ({
        value: cityName,
        label: cityName,
      }));
    }

    return Promise.resolve(optionsData);
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
