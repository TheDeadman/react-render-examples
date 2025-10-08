import { CopyBlock } from 'react-code-blocks';

const codeText = `
// SearchSummary.tsx
import { Box, Typography } from "@mui/material";
import RenderCount from "overall/RenderCount";
import { useAppSelector } from "store/hooks";
import { selectSelectedItem } from "ReduxToolkitApp/features/Search/searchSlice";

const SearchSummary = () => {
    const selectedItem = useAppSelector(selectSelectedItem);
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName="SearchSummary" />
            <Typography variant="h6">Search Selection</Typography>
            {selectedItem ? (
                <Typography>
                    Selected Option: <strong>{selectedItem}</strong>
                </Typography>
            ) : (
                <Typography>No search option selected.</Typography>
            )}
        </Box>
    )
}

export default SearchSummary;
`
function SearchSummaryCodeBlock() {
  return (
    <CopyBlock
      text={codeText}
      language={'jsx'}
      theme={{mode: 'dark', backgroundColor: '#121212'}}
      showLineNumbers={true}
    />
  );
}

export default SearchSummaryCodeBlock;