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
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        const updatedMenu = menu.map((menuItem => {
            if (menuItem._id.secondCategory === secondCategory) {
                menuItem.isOpened = !menuItem.isOpened
            }

            return menuItem;
        }))

        if (typeof setMenu === "function") {
            setMenu(updatedMenu)
        }
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((item) => (
                    <div key={item.route}>
                        <Link href={`${item.route}`} className={styles.firstLevelLink}>
                            <div className={clsx(styles.firstLevel, {
                                [styles.firstLevelActive]: firstCategory === item.id
                            })}>
                                {item.icon}
                                <span>
                                    {item.name}
                                </span>
                            </div>
                        </Link>
                        {item.id === firstCategory && buildSecondLevel(item)}
                    </div>
                ))}
            </>
        )
    };

    const buildSecondLevel = (item: IFirstLevelMenuItem) => {
        return (
            <div className={styles.secondLevel}>
                {menu.map((menuItem) => {
                    const currentPage = router.asPath.split("/")[2];

                    if (menuItem.pages.map(page => page.alias).includes(currentPage)) {
                        menuItem.isOpened = true;
                    }

                    return (
                        <div key={menuItem._id.secondCategory}>
                            <p
                                className={styles.secondLevelTitle}
                                onClick={() => openSecondLevel(menuItem._id.secondCategory)}
                            >
                                {menuItem._id.secondCategory}
                            </p>
                            <div className={clsx(styles.secondLevelBlock, {
                                [styles.secondLevelOpened]: menuItem.isOpened
                            })}>
                                {buildThirdLevel(menuItem.pages, item.route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    };

    const buildThirdLevel = (pages: IPageItem[], route: string) => {
        return (
            <>
                {pages.map((page) => (
                    <Link
                        href={`/${route}/${page.alias}`}
                        key={page.alias}
                        className={clsx(styles.thirdLevel, {
                            [styles.thirdLevelActive]: router.asPath.split("/")[2] === page.alias
                        })}
                    >
                        {page.category}
                    </Link>
                ))}
            </>
        )
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
};

export default Menu;