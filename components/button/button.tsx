import clsx from "clsx";
import {FC, useEffect} from "react";

import ArrowIcon from "./assets/arrow.svg";
import styles from "./button.module.css";
import { ButtonProps } from "./button.props";
import {motion, useMotionValue} from "framer-motion";


export const Button: FC<ButtonProps> = ({children, appearance, arrow = "none", className, ...rest}) => {

    return (
        <motion.button
            className={clsx(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost"
            })}
            {...rest}
            whileHover={{scale: 1.05}}
        >
            {children}
            {arrow !== "none" && 
                <span className={clsx(styles.arrow, {
                    [styles.down]: arrow === "down"
                })}>
                    <ArrowIcon/>
                </span>
            }
        </motion.button>
    )
};