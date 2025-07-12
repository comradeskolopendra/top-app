import { JSX } from "react";
import { TopLevelCategory } from "./page.interface";

export interface IPageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
    hh: {
        count: number;
    }
}

export interface IMenuItem {
    _id: {
        secondCategory: string;
    };
    pages: IPageItem[];
    isOpened?: boolean;
}

export interface IFirstLevelMenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}