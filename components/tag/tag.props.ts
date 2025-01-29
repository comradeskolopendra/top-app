import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: "m" | "s";
    color?: "ghost" | "primary" | "red" | "grey" | "green";
    href?: string;
}