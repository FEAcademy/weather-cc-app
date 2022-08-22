import Weather from 'api/services/Weather';
import { useState } from 'react';
import Select from 'react-select';
import { useDebouncedCallback } from 'use-debounce';
import { AutocompleteOption } from 'models/AutocompleteLocation';
import { inputStyles } from './AutocompleteInput.styled';
import { AutocompleteInputTestIds } from './AutocompleteInputTestIds';

interface Props {
  onChange: (newValue: string) => void;
  value: string;
}

const AutocompleteInput = ({ onChange, value }: Props) => {
  const [inputValue, setInputValue] = useState(value);
  const { data, isLoading } = Weather.useSearchCities(inputValue);

  const serializedValue: AutocompleteOption = {
    name: value,
  };

  const handleInputChange = useDebouncedCallback((value) => setInputValue(value), 500);

  const handleSelect = (city: AutocompleteOption) => {
    onChange(city.name);
  };

  return (
    <div data-testid={AutocompleteInputTestIds.Input}>
      <Select
        options={data}
        isLoading={isLoading}
        onInputChange={(value) => handleInputChange(value)}
        styles={inputStyles}
        placeholder="Search"
        onChange={(newValue) => newValue && handleSelect(newValue)}
        getOptionLabel={({ name }) => name}
        getOptionValue={({ name }) => name}
        isMulti={false}
        name="cities"
        inputId="cities"
        value={value ? serializedValue : null}
      />
    </div>
  );
};

export { AutocompleteInput };
