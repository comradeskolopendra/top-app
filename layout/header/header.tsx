import { FC } from "react";
import { HeaderProps } from "./header.props";

export const Header: FC<HeaderProps> = ({...props}) => {

    return (
        <header {...props}>
            Header
        </header>
    )
};