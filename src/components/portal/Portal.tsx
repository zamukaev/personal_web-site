import { FC } from 'react'
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        element = document.body
    } = props;

    return (
        createPortal(
            children,
            element
        )
    );
}