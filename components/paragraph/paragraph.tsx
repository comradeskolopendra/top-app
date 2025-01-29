import clsx from "clsx";
import { FC } from "react";
import styles from "./paragraph.module.css";
import { ParagraphProps } from "./paragraph.props";

export const Paragraph: FC<ParagraphProps> = ({children, size = "m", className, ...rest}) => {

    return (
        <p 
            className={clsx(styles.paragraph, className, {
                [styles.large]: size === "l",
                [styles.medium]: size === "m",
                [styles.small]: size === "s"
            })}
            {...rest}
        >{children}</p>
    )
};