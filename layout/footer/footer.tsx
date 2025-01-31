import { FC } from "react";
import { FooterProps } from "./footer.props";


export const Footer: FC<FooterProps> = ({...props}) => {
    return (
        <footer {...props}>
            footer
        </footer>
    )
};