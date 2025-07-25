import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";


export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: "blue" | "white";
    children: ReactNode;
}