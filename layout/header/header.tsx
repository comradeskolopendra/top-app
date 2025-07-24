import {FC, useEffect, useState} from "react";
import { HeaderProps } from "./header.props";
import clsx from "clsx";

import styles from "./header.module.css";

import Logo from "./assets/logo.svg";
import {IconButton} from "@/components/icon-button/icon-button";

import {motion} from "framer-motion";
import {Sidebar} from "@/layout/sidebar/sidebar";

import {useRouter} from "next/router";

export const Header: FC<HeaderProps> = ({className, ...props}) => {
    const [opened, setOpened] = useState(false);
    const router = useRouter();

    const handleCloseSidebar = () => {
        setOpened(false);
    };

    const handleOpenSidebar = () => {
        setOpened(true);
    };

    useEffect(() => {
        setOpened(false);
    }, [router.asPath]);

    const variants = {
        "hidden": {
            translateX: "100%",
            transition: {
                stiffness: 20
            }
        },
        "visible": {
            translateX: 0,
            transition: {
                stiffness: 20
            }
        }
    };

    return (
        <header className={clsx(styles.header)} {...props}>
            <Logo/>
            <IconButton onClick={handleOpenSidebar} icon={"menu"} appearance={"white"}/>

            <motion.div
                variants={variants}
                initial={"hidden"}
                animate={opened ? "visible" : "hidden"}
                className={styles.mobileMenu}
            >
                <Sidebar/>

                <IconButton className={styles.closeMenu} icon={"close"} onClick={handleCloseSidebar} appearance={"white"}/>
            </motion.div>
        </header>
    )
};