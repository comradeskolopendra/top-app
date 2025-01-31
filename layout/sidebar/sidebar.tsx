import { FC } from "react";
import { SidebarProps } from "./sidebar.props";

export const Sidebar: FC<SidebarProps> = ({...props}) => {

    return (
        <aside {...props}>
            Sidebar
        </aside>
    )
};