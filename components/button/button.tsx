import clsx from "clsx";
import { FC } from "react";

import styles from "./button.module.css";
import { ButtonProps } from "./button.props";


export const Button: FC<ButtonProps> = ({children, appearance, onClick}) => {

    return (
        <button 
            onClick={onClick} 
            className={clsx(styles.button, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost"
            })}
        >{children}</button>
    )
};