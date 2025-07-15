import {withLayout} from "@/layout/layout";
import {GetStaticPaths, GetStaticProps} from "next";
import axios from "axios";
import {IMenuItem} from "@/interfaces/menu.interface";
import {firstLevelMenu} from "@/helpers/helpers";
import {useRouter} from "next/router";
import {TopLevelCategory} from "@/interfaces/page.interface";
import {FC, useContext, useEffect} from "react";
import {AppContext} from "@/context/app.context";

export const Type: FC<TypeProps> = ({menu}) => {
    const router = useRouter();
    const {setMenu} = useContext(AppContext);

    useEffect(() => {
        if (setMenu) {
            setMenu(menu);
        }
    }, [menu])

    return (<>{router.asPath}</>)
};

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: firstLevelMenu.map((element) => `/${element.route}`),
        fallback: true
    }
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}) => {
    if (!params) {
        return {
            notFound: true,
        }
    }

    const firstCategoryItem = firstLevelMenu.find(lMenu => lMenu.route === params.type);

    console.log(firstCategoryItem, params.type);

    if (!firstCategoryItem) {
        return {
            notFound: true
        }
    }

    const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory: firstCategoryItem.id,
    })

    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id,
        }
    }
};

interface TypeProps extends Record<string, unknown> {
    firstCategory: TopLevelCategory;
    menu: IMenuItem[];
}

export default withLayout(Type);