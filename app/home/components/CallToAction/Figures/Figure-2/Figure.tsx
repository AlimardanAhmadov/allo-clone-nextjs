'use client'

import '../Figure-2/Figure.css';
import { useState, useEffect } from 'react';


export default function Figure2() {
    const [rotateZ, setRotateZ] = useState(-26);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 10300;
    
            if (scrollPosition > threshold) {
                const percentage = Math.min((scrollPosition - threshold) / 700, 1);
                const rotateZValue = -26 + (26 * percentage);
                setRotateZ(rotateZValue);
            } else {
                setRotateZ(-26);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div className='cta-figure-2 backface-visible perspective-origin-center transform-origin-center-bottom mix-blend-normal absolute bottom-auto right-auto' style={{ willChange: 'transform', transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d' }}>
            <img src="/images/cta-figures/Figure-2.svg" alt="" />
        </div>
    );
}