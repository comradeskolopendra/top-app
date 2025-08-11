import {FC, useEffect} from "react";
import {UpProps} from "./up.props";
import clsx from "clsx";
import styles from "./up.module.css";

import UpIcon from "@/components/icon-button/assets/up.svg";
import {useScrollY} from "@/hooks/use-scroll-y";
import {motion, useAnimation} from "framer-motion";
import {IconButton} from "@/components/icon-button/icon-button";

export const Up: FC<UpProps> = ({className, ...rest}) => {
    const scrollY = useScrollY();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({opacity: scrollY / document.body.scrollHeight})
    }, [scrollY, controls]);

    const handleScrollTop = () => {
        if (typeof window !== undefined) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    };

    return (
        <motion.div
            className={clsx(styles.up, className)}
            animate={controls}
            initial={{opacity: 0}}
        >
            <IconButton
                icon={"up"}
                aria-label={"Прокрутить наверх"}
                appearance={"primary"}
                onClick={handleScrollTop}
            />
        </motion.div>
    )
}