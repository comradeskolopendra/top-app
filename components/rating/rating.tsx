// import clsx from "clsx";
// import {FC, JSX, KeyboardEvent, useEffect, useState, forwardRef, useRef, ReactNode} from "react";
// import StarIcon from "./assets/star.svg";
// import styles from "./rating.module.css";
// import { RatingProps } from "./rating.props";
//

// баг с установкой фокуса на элементы. заполняется почему-то 15 элементов, а не 5.
// export const Rating = forwardRef<HTMLDivElement, RatingProps>(({className, error, rating, isEditable = false, setRating, ...rest}, ref) => {
//     const [ratingArray, setRatingArray] = useState<ReactNode[]>(new Array(5).fill(<></>));
//     const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);
//
//     useEffect(() => {
//         constructRating(rating);
//     }, [rating])
//
//     const computeFocus = (rating: number, index: number): 0 | -1 => {
//         if (!isEditable) {
//             return -1;
//         }
//
//         if (!rating && index === 0) {
//             return 0;
//         }
//
//         if (rating === index + 1) {
//             return 0;
//         }
//
//         return -1;
//     }
//
//     const constructRating = (currentRating: number) => {
//         ratingArrayRef.current = [];
//
//         const updated = ratingArray.map((_, index) => (
//             <span
//                 className={clsx(styles.star, {
//                     [styles.filled]: index < currentRating,
//                     [styles.editable]: isEditable,
//                 })}
//                 onMouseEnter={() => handleHoverRating(index + 1)}
//                 onMouseLeave={() => handleHoverRating(rating)}
//                 onClick={() => handleClickRating(index + 1)}
//                 tabIndex={computeFocus(rating, index)}
//                 onKeyDown={handleKeyDown}
//                 ref={(ref) => {
//                     ratingArrayRef.current?.push(ref)
//                 }}
//             >
//                 <StarIcon/>
//             </span>
//         ));
//
//         setRatingArray(updated);
//     };
//
//     const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
//         if (!isEditable || !setRating) {
//             return;
//         }
//
//         if (event.code == 'ArrowRight' || event.code == 'ArrowUp') {
//             if (!rating) {
//                 setRating(1);
//             } else {
//                 event.preventDefault();
//                 setRating(rating < 5 ? rating + 1 : 5);
//             }
//
//             ratingArrayRef.current[rating]?.focus();
//         }
//         if (event.code == 'ArrowLeft' || event.code == 'ArrowDown') {
//             event.preventDefault();
//             setRating(rating > 1 ? rating - 1 : 1);
//
//             ratingArrayRef.current[rating - 2]?.focus();
//         }
//     };
//
//     const handleClickRating = (newRating: number) => {
//         if (typeof setRating === "function" && isEditable) {
//             setRating(newRating);
//         }
//     };
//
//     const handleHoverRating = (rating: number) => {
//         if (isEditable) {
//             constructRating(rating);
//         }
//     };
//
//     return (
//         <div
//             ref={ref}
//             className={clsx(styles.ratingWrapper, className)}
//             {...rest}
//         >
//             {ratingArray.map((rate, index) =>
//                 <span
//                     key={index}
//                     className={clsx({
//                         [styles.error]: error,
//                     })}
//                 >{rate}</span>
//             )}
//             {error && <span className={styles.errorMessage}>{error.message}</span>}
//         </div>
//     )
// });


// этот код не смотреть. не мой код.
import { RatingProps } from './rating.props';
import styles from './Rating.module.css';
import clsx from 'clsx';
import StarIcon from './assets/star.svg';
import {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef, ReactNode} from 'react';

export const Rating = forwardRef<HTMLDivElement, RatingProps>(({ isEditable = false, tabIndex, error, rating, setRating, ...props }, ref) => {
    const [ratingArray, setRatingArray] = useState<ReactNode[]>(new Array(5).fill(<></>));
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        constructRating(rating);
    }, [rating, tabIndex]);

    const computeFocus = (rating: number, index: number): number => {
        if (!isEditable) {
            return -1;
        }

        if (!rating && index === 0) {
            return tabIndex ?? 0;
        }

        if (rating === index + 1) {
            return tabIndex ?? 0;
        }

        return -1;
    };

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: ReactNode, i: number) => {
            return (
                <span
                    className={clsx(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDispay(i + 1)}
                    onMouseLeave={() => changeDispay(rating)}
                    onClick={() => onClick(i + 1)}
                    tabIndex={computeFocus(rating, i)}
                    onKeyDown={handleKey}
                    ref={r => {
                        ratingArrayRef.current?.push(r)
                    }}
                    role={isEditable ? "slider" : ""}
                    aria-label={isEditable ? "Укажите рейтинг" : `Рейтинг ${rating}`}
                    aria-valuemin={1}
                    aria-valuemax={5}
                    aria-valuenow={rating}
                    aria-invalid={!!error}
                >
					<StarIcon />
				</span>

            );
        });
        setRatingArray(updatedArray);
    };

    const changeDispay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleKey = (e: KeyboardEvent) => {
        if (!isEditable || !setRating) {
            return;
        }
        if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
            if (!rating) {
                setRating(1);
            } else {
                e.preventDefault();
                setRating(rating < 5 ? rating + 1 : 5);
            }
            ratingArrayRef.current[rating]?.focus();
        }
        if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
            e.preventDefault();
            setRating(rating > 1 ? rating - 1 : 1);
            ratingArrayRef.current[rating - 2]?.focus();
        }
    };

    return (
        <div {...props} ref={ref} className={clsx(styles.ratingWrapper, {
            [styles.error]: error
        })}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span role={"alert"} className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});