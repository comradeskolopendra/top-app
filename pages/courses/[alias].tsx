
import { IMenuItem } from "@/interfaces/menu.interface";
import { ITopPageModel } from "@/interfaces/page.interface";
import { IProductModel } from "@/interfaces/product.interface";
import { withLayout } from "@/layout/layout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";

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
    const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory
    })

    return {
        paths: menu.flatMap(item => item.pages.map(page => `/courses/${page.alias}`)),
        fallback: true,
    }
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }) => {

    if (!params) {
        return {
            notFound: true
        }
    };

    const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory
    })
    const { data: page } = await axios.get<ITopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`)
    const { data: products } = await axios.post<IProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
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