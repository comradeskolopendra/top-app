import clsx from "clsx";
import { FC, JSX, KeyboardEvent, useEffect, useState } from "react";
import StarIcon from "./assets/star.svg";
import styles from "./rating.module.css";
import { RatingProps } from "./rating.props";

export const Rating: FC<RatingProps> = ({rating, isEditable = false, setRating, ...rest}) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updated = ratingArray.map((_, index) => (
            <StarIcon 
                className={clsx(styles.star, {
                    [styles.filled]: index < currentRating,
                    [styles.editable]: isEditable
                })}
                onMouseEnter={() => handleHoverRating(index + 1)}
                onMouseLeave={() => handleHoverRating(rating)}
                onClick={() => handleClickRating(index + 1)}
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(event:  KeyboardEvent<SVGAElement>) => isEditable ? handleKeyDown(event, index + 1) : ""}
            />
        ));

        setRatingArray(updated);
    };

    const handleKeyDown = (event: KeyboardEvent<SVGAElement>, rating: number) => {
        if (event.code === "Space") {
            handleClickRating(rating);
        }
    };

    const handleClickRating = (newRating: number) => {
        if (typeof setRating === "function" && isEditable) {
            setRating(newRating);
        }
    };

    const handleHoverRating = (rating: number) => {
        if (isEditable) {
            constructRating(rating);
        }
    };

    return (
        <div
            {...rest}
        >
            {ratingArray.map((Rated, index) => <span key={index}>{Rated}</span>)}
        </div>
    )
};