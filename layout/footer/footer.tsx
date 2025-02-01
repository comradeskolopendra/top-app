import { FC } from "react";
import { FooterProps } from "./footer.props";

import clsx from "clsx";
import styles from "./footer.module.css";


export const Footer: FC<FooterProps> = ({className, ...props}) => {
    return (
        <footer className={clsx(className, styles.footer)} {...props}>
            <div>OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</div>
            <a href={"#"} target="_blank">Пользовательское соглашение</a>
            <a href={"#"} target="_blank">Политика конфиденциальности</a>
        </footer>
    )
};