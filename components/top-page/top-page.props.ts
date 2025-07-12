import {ITopPageModel, TopLevelCategory} from "@/interfaces/page.interface";
import {IProductModel} from "@/interfaces/product.interface";

export interface TopPageProps {
    page: ITopPageModel;
    firstCategory: TopLevelCategory;
    products: IProductModel[]
}