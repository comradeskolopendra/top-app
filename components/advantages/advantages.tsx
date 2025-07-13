import styles from "./advantages.module.css";
import {Htag, Paragraph} from "@/components";

import AdvantageIcon from "./assets/advantage.svg";
import {AdvantagesProps} from "./advantages.props"
import {FC} from "react";

export const Advantages: FC<AdvantagesProps> = ({advantages}) => {

    return (
        <div className={styles.wrapper}>
            <Htag tag={"h2"} className={styles.title}>Преимущества</Htag>

            <div className={styles.advantages}>
                {advantages.map((advantage) => (
                    <div className={styles.advantage} key={advantage._id}>
                        <div className={styles.advantageHead}>
                            <AdvantageIcon/>
                            <Htag tag={"h3"} className={styles.advantageTitle}>{advantage.title}</Htag>
                        </div>

                        <div className={styles.advantageBody}>
                            <hr className={styles.line}/>
                            <Paragraph size={"l"}>{advantage.description}</Paragraph>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};