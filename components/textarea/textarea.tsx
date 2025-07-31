import {forwardRef} from "react";
import {TextAreaProps} from "./textarea.props";
import clsx from "clsx";
import styles from "./textarea.module.css";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({className, error, ...rest}, ref) => {
    return (
        <div className={clsx(styles.areaWrapper, className)}>
            <textarea
                className={clsx(styles.textarea, {
                    [styles.error]: error
                })}
                ref={ref}
                {...rest}
            />
            {error && <span role={"alert"} className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
})