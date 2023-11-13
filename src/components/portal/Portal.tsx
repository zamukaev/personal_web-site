import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
    const htmlElem = typeof document !== 'undefined' ? document.body : undefined
    const {
        children,
        element = htmlElem
    } = props;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])


    return (
        mounted ? createPortal(
            children,
            element
        )
            : null
    );
}