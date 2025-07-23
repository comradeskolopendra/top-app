import {FC, useEffect} from "react";
import {UpProps} from "./up.props";
import clsx from "clsx";
import styles from "./up.module.css";

import UpIcon from "./assets/up.svg";
import {useScrollY} from "@/hooks/use-scroll-y";
import {motion, useAnimation} from "framer-motion";

export const Up: FC<UpProps> = ({className, ...rest}) => {
    const scrollY = useScrollY();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({opacity: scrollY / document.body.scrollHeight})
    }, [scrollY, controls]);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <motion.button
            className={clsx(styles.up, className)}
            onClick={handleScrollTop}
            animate={controls}
            initial={{opacity: 0}}
        >
            <UpIcon/>
        </motion.button>
    )
}