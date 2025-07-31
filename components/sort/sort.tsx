import clsx from "clsx";
import {FC} from "react";
import {SortEnum, SortProps} from "./sort.props";
import styles from "./sort.module.css";

import SortIcon from "./assets/sort.svg";

export const Sort: FC<SortProps> = ({sort, setSort}) => {

    return (
        <div className={styles.sort}>
            <div id={"sort"} className={styles.sortName}>Сортировка</div>

            <button
                id={"rating"}
                onClick={() => setSort(SortEnum.RATING)}
                className={clsx({
                    [styles.active]: sort === SortEnum.RATING
                })}
                aria-selected={sort === SortEnum.RATING}
                aria-labelledby={"sort rating"}
            >
                <SortIcon className={styles.icon} /> По рейтингу
            </button>

            <button
                id={"price"}
                onClick={() => setSort(SortEnum.PRICE)}
                className={clsx({
                    [styles.active]: sort === SortEnum.PRICE
                })}
                aria-labelledby={"sort price"}
                aria-selected={sort === SortEnum.PRICE}
            >
                <SortIcon className={styles.icon} /> По цене
            </button>
        </div>
    )
};