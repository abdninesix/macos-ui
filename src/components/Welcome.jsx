import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const FONT_WEIGHTS = {
    subtitles: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 }
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if (!container) return;
    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];
    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`
        })
    };

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRec();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000)
            animateLetter(letter, intensity * (max - min) + min);
        })
    }

    container.addEventListener("mousemove", handleMouseMove);
}

const Welcome = () => {

    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useGSAP(() => {
        setupTextHover(titleRef.current, "title")
        setupTextHover(subtitleRef.current, "subtitle")
    }, [])

    return (
        <section id='welcome'>
            <p ref={subtitleRef}>{renderText("Hi this is my web based macOS portfolio.", "text-3xl font-georama", 100)}</p>
            <h1 ref={titleRef} className='mt-6'>{renderText("macFolio", "text-9xl italic font-georama")}</h1>

            <div className='small-screen'>
                <p>This porfolio is only responsive on desktop/tablet.</p>
            </div>
        </section>
    )
}

export default Welcome