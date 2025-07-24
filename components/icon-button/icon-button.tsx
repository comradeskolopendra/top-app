import {FC} from "react";
import {IconButtonProps} from "@/components/icon-button/icon-button.props";
import clsx from "clsx";
import styles from "./icon-button.module.css"

import {icons} from "./icon-button.props";

export const IconButton: FC<IconButtonProps> = ({icon, appearance, className, ...rest}) => {
    const Icon = icons[icon];

    return (
        <button
            className={clsx(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.white]: appearance === "white"
            })}
            {...rest}
        >
            <Icon/>
        </button>
    )
};