import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {IProductModel} from "@/interfaces/product.interface";

export interface ProductProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProductModel;
}