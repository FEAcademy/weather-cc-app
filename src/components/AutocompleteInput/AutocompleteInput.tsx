import Weather from 'api/services/Weather';
import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

import { Select } from 'models/Select';
import { inputStyles } from './AutocompleteInput.styled';
import { InputTestIds } from './AutocompleteInputTestIds';

interface Props {
  setSavedLocation: React.Dispatch<React.SetStateAction<string | null>>;
  savedLocation: string;
}

const AutocompleteInput = ({ setSavedLocation, savedLocation }: Props) => {
  const [inputValue, setInputValue] = useState(savedLocation);
  const { data } = Weather.useSearchCities(inputValue);

  const value: Select = {
    label: savedLocation,
    value: savedLocation,
  };

  const handleSelect = (city: Select | null) => {
    city && setSavedLocation(city.value);
  };

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
        value={value}
      />
    </div>
  );
};

export { AutocompleteInput };
