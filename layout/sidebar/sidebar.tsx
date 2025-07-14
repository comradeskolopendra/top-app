import { FC } from "react";
import Menu from "../menu/menu";
import { SidebarProps } from "./sidebar.props";
import clsx from "clsx";

import Logo from "./assets/logo.svg";


import styles from "./sidebar.module.css";
import {Search} from "@/components";

export const Sidebar: FC<SidebarProps> = ({className, ...props}) => {

    return (
        <aside className={clsx(styles.sidebar, className)} {...props}>
            <Logo/>
            <Search/>
            <Menu/>
        </aside>
    )
};