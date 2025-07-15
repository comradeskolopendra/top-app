import {FC} from "react";
import {ProductProps} from "./product.props";
import styles from "./product.module.css";
import clsx from "clsx";

export const Product: FC<ProductProps> = ({product, className, ...rest}) => {

    return (
        <div className={clsx(styles.product, className)} {...rest}>
            {product.title}
        </div>
    )
};