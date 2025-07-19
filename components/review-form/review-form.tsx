import {FC} from "react";
import {ReviewFormProps, IReviewForm} from "./review-form.props";
import clsx from "clsx";
import styles from "./review-form.module.css";
import {Button, Input, Rating, TextArea} from "@/components";

import CloseSuccess from "./assets/close-success.svg";
import {useForm, Controller} from "react-hook-form";



export const ReviewForm: FC<ReviewFormProps> = ({productId, className, ...rest}) => {
    const {
        register,
        control,
        handleSubmit
    } = useForm<IReviewForm>()

    const handleSubmitForm = (data: IReviewForm) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(handleSubmitForm)}
        >
            <div className={clsx(styles.reviewForm, className)} {...rest}>
                <Input {...register("name")} placeholder={"Имя"} />
                <Input {...register("title")} placeholder={"Заголовок отзыва"} className={styles.titleInput} />


                <div className={styles.rating}>
                    <span>Оценка: </span>
                    <Controller
                        control={control}
                        name={"rating"}
                        render={({field}) => (
                            <Rating
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                isEditable
                            />
                        )}
                    />
                </div>


                <TextArea {...register("description")} placeholder={"Текст"} className={styles.textarea}/>

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
        </form>
    )
};