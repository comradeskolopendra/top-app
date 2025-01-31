import { FC } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { LayoutProps } from "./layout.props";
import { Sidebar } from "./sidebar/sidebar";

export const Layout: FC<LayoutProps> = ({children}) => {

    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
};