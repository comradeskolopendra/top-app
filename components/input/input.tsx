import {FC} from "react";
import {InputProps} from "./input.props";
import clsx from "clsx";
import styles from "./input.module.css";

export const Input: FC<InputProps> = ({className, ...rest}) => {
    return (
        <input
            className={clsx(styles.input, className)}
            {...rest}
        />
    )
};