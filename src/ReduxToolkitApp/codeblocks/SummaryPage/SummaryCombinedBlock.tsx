import { Divider } from "@mui/material";
import SummaryPageCodeBlock from "./SummaryPageCodeBlock";
import ListSummaryCodeBlock from "./ListSummaryCodeBlock";
import SearchSummaryCodeBlock from "./SearchSummaryCodeBlock";

function SummaryPageCombined() {

    return (
        <div>
            <Divider />
            <SummaryPageCodeBlock />
            <Divider />
            <ListSummaryCodeBlock />
            <Divider />
            <SearchSummaryCodeBlock />
        </div>
    )
}

export default SummaryPageCombined;