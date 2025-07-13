import {SortEnum} from "@/components/sort/sort.props";
import {IProductModel} from "@/interfaces/product.interface";

export type SortActions =
    {type: SortEnum.PRICE} | {type: SortEnum.RATING} | {type: SortEnum.RESET, payload: IProductModel[]};

export type SortState = {
    sort: SortEnum;
    products: IProductModel[];
}

export const sortReducer = (state: SortState, action: SortActions) => {
    switch (action.type) {
        case SortEnum.PRICE: {
            return {
                sort: SortEnum.PRICE,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        }
        case SortEnum.RATING: {
            return {
                sort: SortEnum.RATING,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
            };
        }
        case SortEnum.RESET: {
            return {
                sort: SortEnum.RATING,
                products: action.payload
            }
        }
        default: {
            throw new Error("Непонятный стейт сортировки")
        }
    }
};