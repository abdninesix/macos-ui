import React from 'react'
import useWindowStore from '../store/window';
import { useRef } from 'react';

const WindowWrapper = (component, windowKey) => {

    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey]
        const ref = useRef(null)

        return <section>Hi</section>
    }

    return (
        <div>WindowWrapper</div>
    )
}

export default WindowWrapper