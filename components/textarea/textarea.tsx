import {TextAreaProps} from "./textarea.props";
import clsx from "clsx";
import styles from "./textarea.module.css";

export const TextArea: FC<TextAreaProps> = ({className, ...rest}) => {

    return (
        <textarea className={clsx(styles.textarea, className)} {...rest}/>
    )
}