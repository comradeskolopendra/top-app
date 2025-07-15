import {withLayout} from "@/layout/layout";
import {useContext} from "react";
import {AppContext} from "@/context/app.context";

export const Search = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    console.log(firstCategory, menu);

    return (<>search</>)
};

export default withLayout(Search);