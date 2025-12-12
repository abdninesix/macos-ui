import React from 'react'
import useWindowStore from '../store/window';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

const WindowWrapper = (Component, windowKey) => {

    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey]
        const ref = useRef(null)

        const animation = React.useRef(null)

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            if (isOpen) {
                el.style.display = 'block';
                animation.current = gsap.fromTo(el,
                    {
                        scale: 0.8,
                        opacity: 0,
                        y: 40,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 0.25,
                        ease: "power3.out",
                    }
                )
            } else {
                animation.current = gsap.to(el,
                    {
                        scale: 0.8,
                        opacity: 0,
                        y: 40,
                        duration: 0.25,
                        ease: "power3.in",
                        onComplete: () => {
                            el.style.display = 'none';
                        }
                    }
                )
            }
        }, [isOpen]);

        useLayoutEffect(() => {
            return () => {
                if (animation.current) {
                    animation.current.kill()
                }
            }
        }, [])

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowKey) })
            return () => instance.kill()
        }, []);

        return (
            <section id={windowKey} ref={ref} style={{ zIndex }} className='absolute'>
                <Component {...props} />
            </section>
        )
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"}`
    return Wrapped;
}

export default WindowWrapper
