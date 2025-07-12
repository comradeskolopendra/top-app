import { withLayout } from "@/layout/layout";
import axios from "axios";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import { FC } from "react";
import {IMenuItem} from "@/interfaces/menu.interface";
import {ITopPageModel, TopLevelCategory} from "@/interfaces/page.interface";
import {ParsedUrlQuery} from "node:querystring";
import {IProductModel} from "@/interfaces/product.interface";
import {firstLevelMenu} from "@/helpers/helpers";
import {TopPage as TopPageComponent} from "@/components";


const TopPage: FC<TopPageProps> = ({ page, products, firstCategory }) => {
    return (
        <TopPageComponent firstCategory={firstCategory} page={page} products={products} />
    );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    for (const cat of firstLevelMenu) {
        const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
            firstCategory: cat.id,
        });

        paths = paths.concat(menu.flatMap((element) => element.pages.map(page =>`/${cat.route}/${page.alias}`)));
    }

    return {
        paths: paths,
        fallback: true
    }
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        }
    }

    const firstCategoryItem = firstLevelMenu.find(lMenu => lMenu.route === params.type);

    if (!firstCategoryItem) {
        return {
            notFound: true
        }
    }

    try {
        const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
            firstCategory: firstCategoryItem.id,
        })

        if (menu.length === 0) {
            return {
                notFound: true
            }
        }

        const {data: page} = await axios.get<ITopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`)

        const {data: products} = await axios.post<IProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
            category: page.category,
            limit: 10
        })

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        }
    } catch {
        return {
            notFound: true
        }
    }
};

interface TopPageProps extends Record<string, unknown> {
    firstCategory: TopLevelCategory;
    menu: IMenuItem[];
    page: ITopPageModel;
    products: IProductModel[];
}