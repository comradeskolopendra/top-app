import {forwardRef} from "react";
import {TextAreaProps} from "./textarea.props";
import clsx from "clsx";
import styles from "./textarea.module.css";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({className, ...rest}, ref) => {
    return (
        <textarea className={clsx(styles.textarea, className)} {...rest}/>
    )
})