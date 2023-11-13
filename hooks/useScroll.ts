import { useEffect, useState } from "react";

export const useScroll = () => {
    const [scroll, setScroll] = useState<number>(0);
    const visualViewport = () => {
        return addEventListener("scroll", (event) => {
            setScroll(window.scrollY);
        })
    };
    useEffect(() => {
        visualViewport();
    }, []);

    return { scroll, setScroll }
}