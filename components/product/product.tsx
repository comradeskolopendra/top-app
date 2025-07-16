import {FC} from "react";
import {ProductProps} from "./product.props";
import styles from "./product.module.css";
import clsx from "clsx";
import {Button, Card, Rating, Tag} from "@/components";

export const Product: FC<ProductProps> = ({product, className, color, ...rest}) => {

    return (
        <Card className={clsx(styles.product, className)} {...rest}>
            <div className={styles.logo}>
                <img src={product.image} alt={product.title}/>
            </div>

            <div className={styles.title}>
                {product.title}
            </div>

            <div className={styles.price}>
                {product.price}
            </div>

            <div className={styles.credit}>
                {product.credit}
            </div>

            <div className={styles.rating}>
                <Rating rating={product.reviewAvg  || product.initialRating} />
            </div>

            <div className={styles.categories}>
                {product.categories.map((element) => (
                    <Tag key={element} color={"ghost"}>{element}</Tag>
                ))}
            </div>

            <div className={styles.priceTitle}>
                Цена
            </div>

            <div className={styles.creditTitle}>
                Кредит
            </div>

            <div className={styles.ratingTitle}>
                {product.reviewCount} отзывов
            </div>

            <div className={styles.hr}>
                <hr/>
            </div>

            <div className={styles.description}>
                {product.description}
            </div>

            <div className={styles.feature}>
                features
            </div>

            <div className={styles.advBlock}>
                <div className={styles.advantages}>
                    <div>Преимущества:</div>
                    <div>{product.advantages}</div>
                </div>

                <div className={styles.disadvantages}>
                    <div>Недостатки:</div>
                    <div>{product.disadvantages}</div>
                </div>
            </div>

            <div className={styles.hr}>
                <hr/>
            </div>

            <div className={styles.actions}>
                <Button appearance={"primary"}>Узнать подробнее</Button>
                <Button appearance={"ghost"} arrow={"right"}>Читать отзывы</Button>
            </div>
        </Card>
    )
};