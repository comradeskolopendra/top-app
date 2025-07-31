import {forwardRef} from "react";
import {InputProps} from "./input.props";
import clsx from "clsx";
import styles from "./input.module.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(({className, error, ...rest}, ref) => {
    return (
        <div className={styles.inputWrapper}>
            <input
                ref={ref}
                className={clsx(styles.input, className, {
                    [styles.error]: error
                })}
                {...rest}
            />
            {error && <span role={"alert"} className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
});