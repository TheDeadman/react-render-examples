import { Divider } from "@mui/material";
import SearchPageCodeBlock from "./SearchPageCodeBlock";
import SearchFormCodeBlock from "./SearchFormCodeBlock";
import SearchSliceCodeBlock from "./SearchSliceCodeBlock";

function SearchCombinedCodeBlock() {

    return (
        <div>
            <Divider />
            <SearchPageCodeBlock />
            <Divider />
            <SearchFormCodeBlock />
            <Divider />
            <SearchSliceCodeBlock />
        </div>
    )
}

export default SearchCombinedCodeBlock;