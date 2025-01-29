import clsx from "clsx";
import { FC } from "react";
import styles from "./tag.module.css";
import { TagProps } from "./tag.props";


export const Tag: FC<TagProps> = ({children, href, size = "m", color = "primary", className, ...rest}) => {

    return (
        <div 
            className={clsx(styles.tag, className, {
                [styles.medium]: size === "m",
                [styles.small]: size === "s",
                [styles.primary]: color === "primary",
                [styles.ghost]: color === "ghost",
                [styles.green]: color === "green",
                [styles.grey]: color === "grey",
                [styles.red]: color === "red"
            })}
            {...rest}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    )
};