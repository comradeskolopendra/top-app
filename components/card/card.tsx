import {FC} from "react";
import {CardProps} from "./card.props";
import clsx from "clsx";
import styles from "./card.module.css";

export const Card: FC<CardProps> = ({color = "white", children, className, ...rest}) => {
    return (
        <div className={clsx(styles.card, className, {
            [styles.blue]: color === "blue"
        })}
             {...rest}
        >
            {children}
        </div>
    )
};