import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    element: HTMLElement;
}
export const Portal: FC<PortalProps> = (props) => {
    let {
        children,
        element
    } = props;
    if (typeof document !== 'undefined') {
        element = document.body
    }

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