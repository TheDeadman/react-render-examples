import { Divider } from "@mui/material";
import ListPageCodeBlock from "./ListPageCodeBlock";
import ListTableCodeBlock from "./ListTableCodeBlock";
import ListFormCodeBlock from "./ListFormCodeBlock";
import ListSliceCodeBlock from "./ListSliceCodeBlock";

function ListCombinedCodeBlock() {

    return (
        <div>
            <Divider />
            <ListPageCodeBlock />
            <Divider />
            <ListTableCodeBlock />
            <Divider />
            <ListFormCodeBlock />
            <Divider />
            <ListSliceCodeBlock />
        </div>
    )
}

export default ListCombinedCodeBlock;