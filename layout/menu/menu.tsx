import { AppContext } from "@/context/app.context";
import {IFirstLevelMenuItem, IPageItem} from "@/interfaces/menu.interface";
import {FC, useContext, KeyboardEvent} from "react";

import {firstLevelMenu} from "@/helpers/helpers";

import styles from "./menu.module.css";

import clsx from "clsx";
import Link from "next/link";

import {useRouter} from "next/router";

import {motion} from "framer-motion";


const Menu: FC = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    const variants = {
        "visible": {
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            },
            marginBottom: 20
        },
        "hidden": {
            marginBottom: 0
        }
    }

    const variantsThirdLevel = {
        "visible": {
            opacity: 1,
            height: "auto"
        },
        "hidden": {
            opacity: 0,
            height: 0
        }
    }


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

    const handleKeyDownSecondLevel = (event: KeyboardEvent<HTMLDivElement>, secondCategory: string) => {
        const isNeeded = ["Enter", "Space"];
        if (isNeeded.includes(event.code)) {
            event.preventDefault();
            openSecondBlock(secondCategory);
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
                            <div
                                className={styles.secondLevel}
                                tabIndex={0}
                                onClick={() => openSecondBlock(menuItem._id.secondCategory)}
                                onKeyDown={(event) => handleKeyDownSecondLevel(event, menuItem._id.secondCategory)}
                            >
                                {menuItem._id.secondCategory}
                            </div>
                            <motion.div
                                layout
                                variants={variants}
                                initial={menuItem.isOpened ? "visible" : "hidden"}
                                animate={menuItem.isOpened ? "visible" : "hidden"}
                                className={clsx(styles.secondLevelBlock)}
                            >
                                {buildThirdLevel(menuItem.pages, flMenu.route, menuItem.isOpened)}
                            </motion.div>
                        </div>
                    )
                })
                }
            </div>
        )
    };

    const buildThirdLevel = (pages: IPageItem[], route: string, isOpened: boolean | undefined) => {
        return (
                pages.map(page => {
                    const openedItem = router.asPath.split("/")[2];

                    return (
                        <motion.div
                            variants={variantsThirdLevel}
                            key={page._id}
                        >
                            <Link
                                href={`/${route}/${page.alias}`}
                                className={clsx(styles.thirdLevel, {
                                    [styles.thirdLevelActive]: page.alias === openedItem
                                })}
                                tabIndex={!isOpened ? -1 : 0}
                            >
                                {page.category}
                            </Link>
                        </motion.div>
                    )
                })
        )
    };

    return (
        <nav className={styles.menu} role={"navigation"}>
            {buildFirstLevel()}
        </nav>
    )
};

export default Menu;