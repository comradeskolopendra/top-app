import {FC, useCallback, useEffect, useReducer} from "react";
import {TopPageProps} from "./top-page.props";
import {Advantages, HHData, Htag, Product, Sort, Tag} from "@/components";
import styles from "./top-page.module.css";
import {TopLevelCategory} from "@/interfaces/page.interface";
import {SortEnum} from "@/components/sort/sort.props";
import {sortReducer} from "@/components/top-page/sort.reducer";

import {useScrollY} from "@/hooks/use-scroll-y";

export const TopPage: FC<TopPageProps> = ({firstCategory, page, products}) => {
    const [{products: sortedProducts, sort}, dispatch] = useReducer(sortReducer, {sort: SortEnum.RATING, products: products});
    const scrollY = useScrollY();

    const setSort = useCallback((type: SortEnum) => {
        if (type !== SortEnum.RESET) {
            dispatch({type});
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch({type: SortEnum.RESET, payload: products})
    }, [products]);

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Htag tag={"h1"}>{page.title}</Htag>
                <Tag size="m" color="grey">{products && products.length}</Tag>

                <Sort sort={sort} setSort={setSort}/>
            </header>

            <div>
                {sortedProducts && sortedProducts.map((product => (
                    <Product layout key={product._id} product={product}/>
                )))}
            </div>

            <div className={styles.hhBlock}>
                <Htag tag={"h2"} className={styles.hhTitle}>Вакансии - {page.category}</Htag>
                <Tag color={"red"} size={"m"}>hh.ru</Tag>
            </div>

            {firstCategory === TopLevelCategory.COURSES && page.hh && <HHData {...page.hh}/>}

            {page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages}/>}

            {page.seoText && <div className={styles.additional} dangerouslySetInnerHTML={{__html: page.seoText}}/>}

            <div className={styles.skills}>
                <Htag tag={"h2"}>Получаемые навыки</Htag>

                <div className={styles.tags}>
                    {page.tags.map(element => <Tag color={"primary"}  key={element}>{element}</Tag>)}
                </div>
            </div>
        </div>
    )
};