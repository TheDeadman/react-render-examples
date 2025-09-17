import { Divider } from "@mui/material";
import SearchPageCodeBlock from "./SearchPageCodeBlock";
import SearchFormCodeBlock from "./SearchFormCodeBlock";
import SearchContextCodeBlock from "./SearchContextCodeBlock";

function SearchCombinedCodeBlock() {

    return (
        <div>
            <Divider />
            <SearchPageCodeBlock />
            <Divider />
            <SearchFormCodeBlock />
            <Divider />
            <SearchContextCodeBlock />
        </div>
    )
}

export default SearchCombinedCodeBlock;