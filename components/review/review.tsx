import {FC} from "react";
import {ReviewProps} from "./review.props";
import clsx from "clsx";
import styles from "./review.module.css";

import UserIcon from "./assets/user.svg";

import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {Rating} from "@/components";

export const Review: FC<ReviewProps> = ({review, className, ...rest}) => {
    const {name, title, description, rating, createdAt} = review;
    return (
        <div className={clsx(styles.review, className)} {...rest}>
            <UserIcon className={styles.user}/>

            <div className={styles.title}>
                <span className={styles.name}>{name}: </span>
                <span>{title}</span>
            </div>

            <div className={styles.date}>
                {format(new Date(createdAt), "dd MMMM yyyy", {locale: ru})}
            </div>

            <div className={styles.rating}>
                <Rating rating={rating} />
            </div>

            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
};