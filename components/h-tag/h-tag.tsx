import React, { FC } from "react";
import styles from "./h-tag.module.css";
import { HTagProps } from "./h-tag.props";
import clsx from "clsx";


export const Htag: FC<HTagProps> = ({tag, className = "", children}) => {
    return React.createElement(tag, {className: clsx(className, styles[tag])}, children);
};