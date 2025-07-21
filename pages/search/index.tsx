import {withLayout} from "@/layout/layout";
import {useContext} from "react";
import {AppContext} from "@/context/app.context";
import {GetStaticProps} from "next";
import axios from "axios";
import {IMenuItem} from "@/interfaces/menu.interface";
import {API} from "@/helpers/api";

export const Search = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    console.log(firstCategory, menu);

    return (<>search</>)
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;

    const {data: menu} = await axios.post<IMenuItem[]>(API.topPage.find, {
        firstCategory: firstCategory,
    })

    return {
        props: {
            menu,
            firstCategory
        }
    }
};

interface HomeProps extends Record<string, unknown> {
    firstCategory: number;
    menu: IMenuItem[];
}