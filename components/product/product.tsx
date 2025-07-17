import {FC} from "react";
import {ProductProps} from "./product.props";
import styles from "./product.module.css";
import clsx from "clsx";
import {Button, Card, Divider, Rating, Tag} from "@/components";
import {declWord, formatCurrency} from "@/helpers/helpers";

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
                {formatCurrency(product.price)}
                {product.oldPrice && <Tag className={styles.oldPrice} color={"green"}>{formatCurrency(product.price - product.oldPrice)}</Tag>}
            </div>

            <div className={styles.credit}>
                {formatCurrency(product.credit)} / <span className={styles.month}>мес</span>
            </div>

            <div className={styles.rating}>
                <Rating rating={product.reviewAvg  || product.initialRating} />
            </div>

            <div className={styles.categories}>
                {product.categories.map((element) => (
                    <Tag className={styles.category} key={element} color={"ghost"}>{element}</Tag>
                ))}
            </div>

            <div className={styles.priceTitle}>
                Цена
            </div>

            <div className={styles.creditTitle}>
                Кредит
            </div>

            <div className={styles.ratingTitle}>
                {product.reviewCount} {declWord(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
            </div>

            <Divider className={styles.hr}/>

            <div className={styles.description}>
                {product.description}
            </div>

            <div className={styles.feature}>
                {product.characteristics.map((char) => (
                    <div className={styles.characteristics} key={char.name}>
                        <span className={styles.characteristicName}>
                             {char.name}
                        </span>
                        <span className={styles.dots}/>
                        <span className={styles.characteristicValue}>
                            {char.value}
                        </span>
                    </div>
                ))}
            </div>

            <div className={styles.advBlock}>
                {product.advantages && (
                    <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества:</div>
                        <div>{product.advantages}</div>
                    </div>
                )}

                {product.disadvantages && (
                    <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки:</div>
                        <div>{product.disadvantages}</div>
                    </div>
                )}
            </div>

            <Divider className={styles.hr2}/>

            <div className={styles.actions}>
                <Button appearance={"primary"}>Узнать подробнее</Button>
                <Button className={styles.read} appearance={"ghost"} arrow={"right"}>Читать отзывы</Button>
            </div>
        </Card>
    )
};