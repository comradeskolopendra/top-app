import { AppContext } from "@/context/app.context";
import { FC, useContext } from "react";


const Menu: FC = () => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    return (
        <>
            {menu.map((item) => (
                <>
                    {item._id.secondCategory}
                </>
            ))}
        </>
    )
};

export default Menu;