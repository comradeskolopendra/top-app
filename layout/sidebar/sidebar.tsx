import { FC } from "react";
import Menu from "../menu/menu";
import { SidebarProps } from "./sidebar.props";

export const Sidebar: FC<SidebarProps> = ({...props}) => {

    return (
        <aside {...props}>
            <Menu/>
        </aside>
    )
};