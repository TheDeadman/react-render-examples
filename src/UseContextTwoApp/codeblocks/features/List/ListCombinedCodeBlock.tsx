import { Divider } from "@mui/material";
import ListPageCodeBlock from "./ListPageCodeBlock";
import ListTableCodeBlock from "./ListTableCodeBlock";
import ListFormCodeBlock from "./ListFormCodeBlock";
import ListContextCodeBlock from "./ListContextCodeBlock";

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
            <ListContextCodeBlock />
        </div>
    )
}

export default ListCombinedCodeBlock;