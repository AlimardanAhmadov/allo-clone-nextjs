'use client'

import '../Figure-3/Figure.css';
import { useState, useEffect } from 'react';


export default function Figure3() {
    const [rotateZ, setRotateZ] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 10300;
    
            if (scrollPosition > threshold) {
                const percentage = Math.min((scrollPosition - threshold) / 700, 1);
                const rotateZValue = 30 - (30 * percentage);
                setRotateZ(rotateZValue);
            } else {
                setRotateZ(30);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='cta-figure-3 mix-blend-normal absolute bottom-auto right-auto' style={{ willChange: 'trasform', transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d' }}>
            <img src="/images/cta-figures/Figure-3.svg" alt="" />
        </div>
    );
}