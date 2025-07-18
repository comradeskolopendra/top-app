import {FC} from "react";
import {ReviewFormProps} from "./review-form.props";
import clsx from "clsx";
import styles from "./review-form.module.css";
import {Button, Input, Rating, TextArea} from "@/components";

import CloseSuccess from "./assets/close-success.svg";


export const ReviewForm: FC<ReviewFormProps> = ({productId, className, ...rest}) => {

    return (
        <>
            <div className={clsx(styles.reviewForm, className)} {...rest}>
                <Input placeholder={"Имя"} />
                <Input placeholder={"Заголовок отзыва"} className={styles.titleInput} />

                <div className={styles.rating}>
                    <span>Оценка: </span>
                    <Rating rating={0} isEditable/>
                </div>

                <TextArea placeholder={"Текст"} className={styles.textarea}/>

                <div className={styles.submit}>
                    <Button appearance={"primary"}>
                        Отправить
                    </Button>

                    <span className={styles.remark}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>

            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо, ваш отзыв будет опубликован после проверки</div>

                <CloseSuccess className={styles.close}/>
            </div>
        </>
    )
};