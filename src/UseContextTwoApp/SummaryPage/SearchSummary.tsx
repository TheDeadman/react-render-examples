import { Box, Typography } from "@mui/material";
import RenderCount from "overall/RenderCount";
import { useAppContextTwo } from "../context";

const SearchSummary = () => {
    const { selectedOption } = useAppContextTwo();
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName="SearchSummary" />
            <Typography variant="h6">Search Selection</Typography>
            {selectedOption ? (
                <Typography>
                    Selected Option: <strong>{selectedOption}</strong>
                </Typography>
            ) : (
                <Typography>No search option selected.</Typography>
            )}
        </Box>
    )
}

export default SearchSummary;