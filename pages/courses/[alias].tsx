import { withLayout } from "@/layout/layout";
import axios from "axios";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import { FC, useState } from "react";
import {IMenuItem} from "@/interfaces/menu.interface";
import {ITopPageModel} from "@/interfaces/page.interface";
import {ParsedUrlQuery} from "node:querystring";
import {IProductModel} from "@/interfaces/product.interface";

const firstCategory = 0;

const Course: FC<CourseProps> = ({ menu, page, products }) => {
    return (
        <>
            {products && products.length}
        </>
    );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory: firstCategory,
    })

    return {
        paths: menu.flatMap((element) => element.pages.map(page =>`/courses/${page.alias}`)),
        fallback: true
    }
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        }
    }

    const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory: firstCategory,
    })
    const {data: page} = await axios.get<ITopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`)
    const {data: products} = await axios.post<IProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
        category: page.category,
        limit: 10
    })

    return {
        props: {
            menu,
            firstCategory,
            page,
            products
        }
    }
};

interface CourseProps extends Record<string, unknown> {
    firstCategory: number;
    menu: IMenuItem[];
    page: ITopPageModel;
    products: IProductModel[];
}