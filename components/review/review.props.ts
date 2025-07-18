import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {IReviewModel} from "@/interfaces/product.interface";


export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: IReviewModel;
}