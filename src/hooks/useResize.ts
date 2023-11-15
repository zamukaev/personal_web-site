import { useEffect, useState } from "react";

export const useResize = () => {
    const [width, setWidth] = useState(0);

    const getWidth = () => {
        setWidth(window.innerWidth)
    }
    if (typeof window !== "undefined") {
        window.addEventListener("resize", getWidth)
    }

    useEffect(() => {
        setWidth(window.innerWidth)
        return () => {
            window.removeEventListener("resize", getWidth);
        }
    }, []);

    return { width, setWidth };
}