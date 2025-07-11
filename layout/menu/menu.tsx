import { AppContext } from "@/context/app.context";
import {IFirstLevelMenuItem, IPageItem} from "@/interfaces/menu.interface";
import { FC, useContext } from "react";

import {firstLevelMenu} from "@/helpers/helpers";

import styles from "./menu.module.css";

import clsx from "clsx";
import Link from "next/link";

import {useRouter} from "next/router";



const Menu: FC = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    const openSecondBlock = (secondCategory: string) => {
        if (setMenu) {
            setMenu(menu.map(element => {
                if (element._id.secondCategory === secondCategory) {
                    element.isOpened = !element.isOpened;
                }

                return element;
            }))
        }
    };

    const buildFirstLevel = ()=> {
        return (
            <>
                {firstLevelMenu.map(flMenu => {
                    return (
                        <div key={flMenu.route}>
                            <Link className={styles.firstLevelLink} href={`/${flMenu.route}`}>
                                <div className={clsx(styles.firstLevel, {
                                    [styles.firstLevelActive]: flMenu.id === firstCategory
                                })}>
                                    {flMenu.icon}
                                    <span>{flMenu.name}</span>
                                </div>
                            </Link>

                            {flMenu.id === firstCategory && buildSecondLevel(flMenu)}
                        </div>
                    )
                })}
            </>
        )
    };

    const buildSecondLevel = (flMenu: IFirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map((menuItem) => {
                    const aliases = menuItem.pages.map((page) => page.alias);
                    const openedItem = router.asPath.split("/")[2];

                    if (aliases.includes(openedItem)) {
                        menuItem.isOpened = true;
                    }

                    return (
                        <div key={menuItem._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondBlock(menuItem._id.secondCategory)}>{menuItem._id.secondCategory}</div>
                            <div className={clsx(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: menuItem.isOpened
                            })}>
                                {buildThirdLevel(menuItem.pages, flMenu.route)}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    };

    const buildThirdLevel = (pages: IPageItem[], route: string) => {
        return (
                pages.map(page => {
                    const openedItem = router.asPath.split("/")[2];

                    return (
                        <Link href={`/${route}/${page.alias}`} className={clsx(styles.thirdLevel, {
                            [styles.thirdLevelActive]: page.alias === openedItem
                        })}>
                            {page.category}
                        </Link>
                    )
                })
        )
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
};

export default Menu;