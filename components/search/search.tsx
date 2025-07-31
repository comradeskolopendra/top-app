import {ChangeEvent, KeyboardEvent, FC, useState} from "react";
import {SearchProps} from "./search.props";
import clsx from "clsx";
import styles from "./search.module.css";
import {Input, Button} from "@/components";
import SearchIcon from "./assets/search.svg";
import {useRouter} from "next/router";


export const Search: FC<SearchProps> = ({className, ...rest}) => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSearch = () => {
        router.push({
            pathname: "/search",
            query: {
                q: search
            }
        })
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key.toLowerCase() === "enter") {
            handleSearch();
        }
    }

    return (
        <div className={clsx(styles.search, className)} {...rest}>
            <Input
                placeholder={"Поиск"}
                value={search}
                onChange={handleChangeSearch}
                className={styles.input}
            />

            <Button
                appearance={"primary"}
                className={styles.button}
                onClick={handleSearch}
                onKeyDown={handleKeyDown}
                aria-label={"Искать по сайту"}
            >
                <SearchIcon/>
            </Button>
        </div>
    )
}