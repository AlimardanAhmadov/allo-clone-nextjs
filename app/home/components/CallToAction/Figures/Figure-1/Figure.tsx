import { useState, useEffect } from 'react';
import '../Figure-1/Figure.css';

export default function Figure() {
    const [translateX, setTranslateX] = useState(-500);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 10300;
            const maxTranslateX = 0;
            const minTranslateX = -500;

            if (scrollPosition > threshold) {
                const percentage = Math.min((scrollPosition - threshold) / 700, 1); // Adjust the divisor to control the speed of transition
                const translateYValue = minTranslateX + (maxTranslateX - minTranslateX) * percentage;
                setTranslateX(translateYValue);
            } else {
                setTranslateX(minTranslateX);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='cta-figure-1 absolute bottom-auto right-auto' style={{ willChange: 'transform', transform: `translate3d(${translateX}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d' }}>
            <img src="/images/cta-figures/Figure-1.svg" alt="" />
        </div>
    );
}
