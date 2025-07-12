import {FC} from "react";
import {HHDataProps} from "./hh-data.props";
import StarIcon from "./assets/star.svg";

import styles from "./hh-data.module.css";

import {Card} from "@/components";
import {formatCurrency} from "@/helpers/helpers";

export const HHData: FC<HHDataProps> = ({ count, juniorSalary, middleSalary, seniorSalary}) => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>

            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{formatCurrency(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <StarIcon className={styles.active}/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                </div>

                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{formatCurrency(middleSalary)}</div>
                    <div className={styles.rate}>
                        <StarIcon className={styles.active}/>
                        <StarIcon className={styles.active}/>
                        <StarIcon/>
                    </div>
                </div>

                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{formatCurrency(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <StarIcon className={styles.active}/>
                        <StarIcon className={styles.active}/>
                        <StarIcon className={styles.active}/>
                    </div>
                </div>
            </Card>
        </div>
    )
};