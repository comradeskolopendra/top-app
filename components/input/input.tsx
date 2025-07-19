import {forwardRef} from "react";
import {InputProps} from "./input.props";
import clsx from "clsx";
import styles from "./input.module.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(({className, ...rest}, ref) => {
    return (
        <input
            ref={ref}
            className={clsx(styles.input, className)}
            {...rest}
        />
    )
});