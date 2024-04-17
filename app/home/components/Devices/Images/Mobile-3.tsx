'use client'

import '../Images/Mobile-3.css';
import React, { useState, useEffect } from 'react';

const Mobile = () => {
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 9000; // Threshold set to 9000 as required
            const maxTranslate = -300; // Maximum translateY value

            if (scrollPosition > threshold) {
                // Calculate the new translateY value based on scroll position
                const newTranslateY = Math.min((scrollPosition - threshold) / 4, maxTranslate);
                setTranslateY(newTranslateY);
            } else {
                setTranslateY(0); // Reset translateY if scroll position is less than the threshold
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    // Apply a CSS transition to ensure smooth translateY changes
    const containerStyle = {
        willChange: 'transform',
        transform: `translate3d(0px, ${translateY}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease' // Smooth transition
    };

    return (
        <div className='landing-mobile-3 absolute bottom-auto' style={containerStyle}>
            <img src="/images/devices-mobile-3.svg" alt="" />
        </div>
    );
};

export default Mobile;
