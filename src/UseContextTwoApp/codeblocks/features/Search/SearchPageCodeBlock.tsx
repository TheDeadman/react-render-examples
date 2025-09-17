import { CopyBlock } from 'react-code-blocks';

const codeText = `
// SearchPage.tsx
import React from 'react';
import {
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Box,
    Typography,
} from '@mui/material';
import RenderCount from 'overall/RenderCount';
import SearchForm from './SearchForm';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectErrorText, selectIsNoResultsVisible, selectIsSelectDisabled, selectSearchDropdownOptions, selectSelectedItem, setSelectedItem } from './searchSlice';

const SearchPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const selectedItem = useAppSelector(selectSelectedItem);
    const searchDropdownOptions = useAppSelector(selectSearchDropdownOptions);
    const isSelectDisabled = useAppSelector(selectIsSelectDisabled);
    const errorText = useAppSelector(selectErrorText);
    const isNoResultsVisible = useAppSelector(selectIsNoResultsVisible)

    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="SearchPage" />
            <Typography variant="h4" gutterBottom>
                Search Page
            </Typography>
            <SearchForm />

            {errorText && <Typography color="error">{errorText}</Typography>}

            <FormControl fullWidth sx={{ marginTop: 2 }}>
                <InputLabel>Select an Option</InputLabel>
                <Select
                    value={selectedItem}
                    onChange={(e) => dispatch(setSelectedItem(e.target.value))}
                    label="Select an Option"
                    displayEmpty
                    disabled={isSelectDisabled}
                >
                    {searchDropdownOptions.map((result) => (
                        <MenuItem key={\`search-\${result}\`} value={result}>
                            {result}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography color='error'>
                {isNoResultsVisible && (
                    <>No results found. Please try another search.</>
                )}
                &nbsp;
            </Typography>

            <div>Current Selection: {selectedItem}</div>

        </Box>
    );
};

export default SearchPage;

`

function SearchPageCodeBlock() {
  return (
    <CopyBlock
      text={codeText}
      language={'jsx'}
      theme={{mode: 'dark', backgroundColor: '#121212'}}
      showLineNumbers={true}
    />
  );
}

export default SearchPageCodeBlock;

