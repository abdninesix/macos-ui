import React from 'react'
import { useRef } from 'react'

const Welcome = () => {

    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    return (
        <section id='welcome'>
            <p ref={subtitleRef}>Hi this is my web based macOS portfolio.</p>
            <h1 ref={titleRef} className='mt-6'>macFolio</h1>

            <div className='small-screen'>
                <p>This porfolio is only responsive on desktop/tablet.</p>
            </div>
        </section>
    )
}

export default Welcome