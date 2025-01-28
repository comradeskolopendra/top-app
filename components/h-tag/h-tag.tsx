import React, { FC } from "react";
import styles from "./h-tag.module.css";
import { HTagProps } from "./h-tag.props";


export const Htag: FC<HTagProps> = ({tag, children}) => {
    return React.createElement(tag, {className: styles[tag]}, children);
};