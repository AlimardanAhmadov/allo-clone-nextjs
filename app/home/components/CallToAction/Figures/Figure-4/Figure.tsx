'use client'

import '../Figure-4/Figure.css';
import { useState, useEffect } from 'react';


export default function Figure4() {
    const [rotateZ, setRotateZ] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 10600;
    
            if (scrollPosition > threshold) {
                const percentage = Math.min((scrollPosition - threshold) / 700, 1);
                const rotateZValue = 10 - (10 * percentage);
                setRotateZ(rotateZValue);
            } else {
                setRotateZ(10);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='cta-figure-4 mix-blend-normal absolute bottom-auto right-auto' style={{ willChange: 'trasform', transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d' }}>
            <img src="/images/cta-figures/Figure-4.svg" alt="" />
        </div>
    );
}