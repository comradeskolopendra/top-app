import {FC, forwardRef} from "react";
import {CardProps} from "./card.props";
import clsx from "clsx";
import styles from "./card.module.css";

export const Card: FC<CardProps> = forwardRef(({color = "white", children, className, ...rest}, ref) => {
    return (
        <div
            ref={ref}
            className={clsx(styles.card, className, {
                [styles.blue]: color === "blue"
            })}
             {...rest}
        >
            {children}
        </div>
    )
});