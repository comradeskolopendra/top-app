import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

import close from "./assets/close.svg";
import up from "./assets/up.svg";
import menu from "./assets/menu.svg";

export const icons = {up,close,menu}
export type TIconName = keyof typeof icons;

export interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: TIconName;
    appearance: "primary" | "white";
}