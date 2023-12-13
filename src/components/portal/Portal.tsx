import { NextPage } from 'next';
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    element?: Element | undefined;
}
export const Portal: NextPage<PortalProps> = (props) => {
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
    }, []);

    return (
        mounted ? createPortal(
            children,
            element as Element
        )
            : null
    );
}