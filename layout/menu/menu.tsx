import { AppContext } from "@/context/app.context";
import {IFirstLevelMenuItem, IPageItem} from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { FC, useContext } from "react";

import styles from "./menu.module.css";

import clsx from "clsx";
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
        route: "products",
        name: "Товары",
        icon: <ProductsSvg />,
        id: TopLevelCategory.PRODUCTS
    }
];

const Menu: FC = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    const buildFirstLevel = ()=> {
        return (
            <>
                {firstLevelMenu.map(flMenu => (
                    <div key={flMenu.route}>
                        <a className={styles.firstLevelLink} href={`/${flMenu.route}`}>
                            <div className={clsx(styles.firstLevel, {
                                [styles.firstLevelActive]: flMenu.id === firstCategory
                            })}>
                                {flMenu.icon}
                                <span>{flMenu.name}</span>
                            </div>
                        </a>

                        {flMenu.id === firstCategory && buildSecondLevel(flMenu)}
                    </div>
                ))}
            </>
        )
    };

    const buildSecondLevel = (flMenu: IFirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map((menuItem) => (
                    <div key={menuItem._id.secondCategory}>
                        <div className={styles.secondLevel}>{menuItem._id.secondCategory}</div>
                        <div className={clsx(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: menuItem.isOpened
                        })}>
                            {buildThirdLevel(menuItem.pages, flMenu.route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    };

    const buildThirdLevel = (pages: IPageItem[], route: string) => {
        return (
                pages.map(page => (
                    <a href={`/${route }/${page.alias}`} className={clsx(styles.thirdLevel, {
                        [styles.thirdLevelActive]: false
                    })}>
                        {page.category}
                    </a>
                ))
        )
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
};

export default Menu;