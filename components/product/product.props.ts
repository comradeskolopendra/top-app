import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {IProductModel} from "@/interfaces/product.interface";

export interface ProductProps extends
    Omit<
        DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        "onAnimationStart" |
        "onDragStart" |
        "onDragEnd" |
        "onDrag" |
        "ref"
    >
{
    product: IProductModel;
}