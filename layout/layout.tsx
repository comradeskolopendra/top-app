import {FC, useState, KeyboardEvent, useRef} from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { LayoutProps } from "./layout.props";
import { Sidebar } from "./sidebar/sidebar";

import { AppContextProvider, IAppContext } from "@/context/app.context";
import styles from "./layout.module.css";
import {Up} from "@/components";
import clsx from "clsx";

const Layout: FC<LayoutProps> = ({ children }) => {
    const [isDisplayed, setDisplayed] = useState(false);
    const refContent = useRef<HTMLDivElement>(null);

    const handleSkipContentAction = (event: KeyboardEvent) => {
        const isNeeded = ["Enter", "Space"];

        if (isNeeded.includes(event.code)) {
            event.preventDefault();
            refContent.current?.focus();
        }

        setDisplayed(false)
    };

    return (
        <div className={styles.wrapper}>
            <a
                href={""}
                tabIndex={0}
                className={clsx(styles.skipLink, {
                    [styles.displayed]: isDisplayed,
                    [styles.hidden]: !isDisplayed
                })}
                onFocus={() => setDisplayed(true)}
                onKeyDown={handleSkipContentAction}
            >
                К содержанию
            </a>
            <Header className={styles.header} />

            <Sidebar className={styles.sidebar} />

            <main className={styles.body} tabIndex={0} ref={refContent} role={"main"}>
                {children}
            </main>

            <Footer className={styles.footer} />

            <Up/>
        </div>
    )
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
    return (props: T) => {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        )
    };
}