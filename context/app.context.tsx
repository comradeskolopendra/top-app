import { IMenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { createContext, FC, ReactNode, useState } from "react";

interface IAppContextProviderProps extends IAppContext {
    children: ReactNode;
}

export interface IAppContext {
    menu: IMenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: IMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
    menu: [],
    firstCategory: TopLevelCategory.COURSES
});

export const AppContextProvider: FC<IAppContextProviderProps> = ({children, menu, firstCategory}) => {
    const [menuState, setMenuState] = useState<IMenuItem[]>(menu);

    const setMenu = (newMenu: IMenuItem[]) => {
        setMenuState(newMenu);
    };
    
    return (
        <AppContext.Provider value={{menu: menuState, setMenu, firstCategory}}>
            {children}
        </AppContext.Provider>
    )
}