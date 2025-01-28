import clsx from "clsx";
import { FC } from "react";

import ArrowIcon from "./assets/arrow.svg";
import styles from "./button.module.css";
import { ButtonProps } from "./button.props";


export const Button: FC<ButtonProps> = ({children, appearance, arrow = "none", className, ...rest}) => {

    return (
        <button 
            className={clsx(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost"
            })}
            {...rest}
        >
            {children}
            {arrow !== "none" && 
                <span className={clsx(styles.arrow, {
                    [styles.down]: arrow === "down"
                })}>
                    <ArrowIcon/>
                </span>
            }
        </button>
    )
};