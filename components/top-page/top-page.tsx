import {FC} from "react";
import {TopPageProps} from "./top-page.props";
import {HHData, Htag, Tag} from "@/components";
import styles from "./top-page.module.css";
import {TopLevelCategory} from "@/interfaces/page.interface";

export const TopPage: FC<TopPageProps> = ({firstCategory, page, products}) => {


    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Htag tag={"h1"}>{page.title}</Htag>
                <Tag size="m" color="grey">{products && products.length}</Tag>

                <span>
                    Сортировка
                </span>
            </header>

            <div>
                {products && products.map((product => (
                    <div key={product._id}>
                        {product.title}
                    </div>
                )))}
            </div>

            <div className={styles.hhBlock}>
                <Htag tag={"h2"} className={styles.hhTitle}>Вакансии - {page.category}</Htag>
                <Tag color={"red"} size={"m"}>hh.ru</Tag>
            </div>

            {firstCategory === TopLevelCategory.COURSES && (
                <HHData
                    {...page.hh}
                />
            )}
        </div>
    )
};