import {FC, useEffect, useRef, useState} from "react";
import {ProductProps} from "./product.props";
import styles from "./product.module.css";
import clsx from "clsx";
import {Button, Card, Divider, Rating, ReviewForm, Tag} from "@/components";
import {declWord, formatCurrency} from "@/helpers/helpers";
import {Review} from "@/components/review/review";
import React from "react";
import Image from "next/image";
import {motion, useAnimation} from "framer-motion";

export const Product = motion.create<ProductProps>(({product, className, color, ...rest}) => {
    const [opened, setOpened] = useState(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
        "hidden": {
            opacity: 0,
            height: 0
        },
        "visible": {
            opacity: 1,
            height: "auto"
        }
    }

    const handleOpenReviews = () => {
        setOpened(prevState => !prevState)
    };

    const handleScrollReview = () => {
        setOpened(true);
        reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className={clsx(styles.productWrapper, className)} {...rest}>
            <Card className={clsx(styles.product)}>
                <div className={styles.logo}>
                    <Image width={70} height={70} src={product.image} alt={product.title}/>
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
                    <a className={styles.scrollLink} href={"#ref"} onClick={handleScrollReview}>
                        {product.reviewCount} {declWord(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
                    </a>
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
                    <Button
                        className={styles.read}
                        onClick={handleOpenReviews}
                        appearance={"ghost"}
                        arrow={opened ? "down" : "right"}
                    >
                        Читать отзывы
                    </Button>
                </div>
            </Card>

            <motion.div
                variants={variants}
                initial={"hidden"}
                animate={opened ? "visible" : "hidden"}
            >
                <Card
                    color={"blue"}
                    ref={reviewRef}
                    className={styles.reviews}
                >
                    {product.reviews.map((review) => (
                        <React.Fragment key={review._id}>
                            <Review review={review}/>
                            <Divider/>
                        </React.Fragment>
                    ))}
                    <ReviewForm productId={product._id}/>
                </Card>
            </motion.div>
        </div>
    )
});