import {FC} from "react";
import {DividerProps} from "@/components/divider/divider.props";
import styles from "./divider.module.css";
import clsx from "clsx";

export const Divider: FC<DividerProps> = ({className, ...rest}) => {
    return (<hr className={clsx(styles.hr, className)} {...rest}/>)
};