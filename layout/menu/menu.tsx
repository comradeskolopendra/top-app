import { AppContext } from "@/context/app.context";
import { IFirstLevelMenuItem, IPageItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { FC, useContext } from "react";

import styles from "./menu.module.css";

import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import BooksSvg from "./assets/books.svg";
import CoursesSvg from "./assets/courses.svg";
import ProductsSvg from "./assets/products.svg";
import ServicesSvg from "./assets/services.svg";

const firstLevelMenu: IFirstLevelMenuItem[] = [
    {
        route: "courses",
        name: "Курсы",
        icon: <CoursesSvg />,
        id: TopLevelCategory.COURSES
    },
    {
        route: "services",
        name: "Сервисы",
        icon: <ServicesSvg />,
        id: TopLevelCategory.SERVICES
    },
    {
        route: "books",
        name: "Книги",
        icon: <BooksSvg />,
        id: TopLevelCategory.BOOKS
    },
    {
        route: "product",
        name: "Товары",
        icon: <ProductsSvg />,
        id: TopLevelCategory.PRODUCTS
    }
];

const Menu: FC = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    return (
        <ul>
            {menu.map(element => <li>{element._id.secondCategory}</li>)}
        </ul>
    )
};

export default Menu;