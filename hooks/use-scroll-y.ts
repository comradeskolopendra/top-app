import {useEffect, useState} from "react";


export const useScrollY = (): number => {
    const [gap, setGap] = useState<number>(0);

    useEffect(() => {
        const handleScroll = (event: Event) => {
            setGap(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return gap;
};