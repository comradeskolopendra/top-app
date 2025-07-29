import {FC, useState} from "react";
import {ReviewFormProps, IReviewForm, IReviewResponse} from "./review-form.props";
import clsx from "clsx";
import styles from "./review-form.module.css";
import {Button, Input, Rating, TextArea} from "@/components";

import CloseSuccess from "./assets/close-success.svg";
import {useForm, Controller} from "react-hook-form";
import axios from "axios";
import {API} from "@/helpers/api";



export const ReviewForm: FC<ReviewFormProps> = ({productId, className, isOpened, ...rest}) => {
    const {
        register,
        control,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm<IReviewForm>()
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const handleSubmitForm = async (formData: IReviewForm) => {
        setIsSuccess(false);
        setError("")

        try {
            const {data} = await axios.post<IReviewResponse>(API.review.createDemo, {...formData});

            if (!data.message) {
                throw new Error("Что-то пошло не так")
            }

            setIsSuccess(true)
            reset();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleSubmitForm)}
        >
            <div className={clsx(styles.reviewForm, className)} {...rest}>
                <Input
                    {...register("name",
                        {
                            required: {
                                value: true,
                                message: "Заполните имя"
                            }
                        }
                    )}
                    error={errors.name}
                    placeholder={"Имя"}
                    tabIndex={isOpened ? 0 : -1}
                />
                <Input
                    {...register("title",
                        {
                            required: {
                                value: true,
                                message: "Заполните название"
                            }
                        }
                    )}
                    error={errors.title}
                    placeholder={"Заголовок отзыва"}
                    className={styles.titleInput}
                    tabIndex={isOpened ? 0 : -1}
                />


                <div className={styles.rating}>
                    <span>Оценка: </span>
                    <Controller
                        control={control}
                        name={"rating"}
                        rules={{
                            required: {
                                value: true,
                                message: "Общая оценка обязательна"
                            }
                        }}
                        render={({field}) => (
                            <Rating
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                error={errors.rating}
                                isEditable
                                tabIndex={isOpened ? 0 : -1}
                            />
                        )}
                    />
                </div>


                <TextArea
                    {...register('description', { required: { value: true, message: 'Заполните описание' } })}
                    error={errors.description}
                    placeholder={"Текст отзыва"}
                    className={styles.textarea}
                    tabIndex={isOpened ? 0 : -1}
                />

                <div className={styles.submit}>
                    <Button
                        appearance={"primary"}
                        tabIndex={isOpened ? 0 : -1}
                    >
                        Отправить
                    </Button>

                    <span className={styles.remark}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>

            {isSuccess && (
                <div className={clsx(styles.success, styles.panel)}>
                    <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                    <div>Спасибо, ваш отзыв будет опубликован после проверки</div>

                    <CloseSuccess className={styles.close} onClick={() => setIsSuccess(false)}/>
                </div>
            )}
            {error && (
                <div className={clsx(styles.error, styles.panel)}>
                    <div className={styles.errorTitle}>
                        Что-то пошло не так
                    </div>

                    <CloseSuccess className={clsx(styles.close)} onClick={() => setError("")}/>
                </div>
            )}
        </form>
    )
};