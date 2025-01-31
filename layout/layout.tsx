import { FC } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { LayoutProps } from "./layout.props";
import { Sidebar } from "./sidebar/sidebar";

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
};

export const withLayout = <T extends Record<string, unknown>,>(Component: FC<T>) => {
    return (props: T) => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    };
}