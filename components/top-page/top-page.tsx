import {FC} from "react";
import {TopPageProps} from "./top-page.props";
import {HHData, Htag, Tag, Advantages, Paragraph} from "@/components";
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