import { FC } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { LayoutProps } from "./layout.props";
import { Sidebar } from "./sidebar/sidebar";

import { AppContextProvider, IAppContext } from "@/context/app.context";
import styles from "./layout.module.css";

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer} />
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