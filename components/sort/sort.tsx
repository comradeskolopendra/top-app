import clsx from "clsx";
import {FC} from "react";
import {SortEnum, SortProps} from "./sort.props";
import styles from "./sort.module.css";

import SortIcon from "./assets/sort.svg";

export const Sort: FC<SortProps> = ({sort, setSort}) => {

    return (
        <div className={styles.sort}>
            <button
                onClick={() => setSort(SortEnum.RATING)}
                className={clsx({
                    [styles.active]: sort === SortEnum.RATING
                })}
            >
                <SortIcon className={styles.icon} /> По рейтингу
            </button>

            <button
                onClick={() => setSort(SortEnum.PRICE)}
                className={clsx({
                    [styles.active]: sort === SortEnum.PRICE
                })}
            >
                <SortIcon className={styles.icon} /> По цене
            </button>
        </div>
    )
};