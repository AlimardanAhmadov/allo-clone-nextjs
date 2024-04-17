'use client'

import React, { useState, useEffect } from 'react';
import '../PurpleMask/PurpleMask.css';

const PurpleMask = () => {
    const [translateY, setTranslateY] = useState(0);
    const [height, setHeight] = useState(170); // State for dynamic height

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 7500;
            const heightThreshold = 7700

            if (scrollPosition > threshold) {
                const translateYValue = Math.min((scrollPosition - threshold) / 2, 308);
                setTranslateY(translateYValue);

                const newHeight = Math.max(0, 170 - (scrollPosition - heightThreshold) / 2);
                setHeight(newHeight);
            } else {
                setTranslateY(0);
                setHeight(170);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='static' style={{ height: '25vh', backgroundColor: '#403754' }}></div>
            <div className='purple-mask-overlay'>
                <img className='flex relative flex-col items-stretch top-0 bottom-0 left-0 right-0 overflow-visible w-full' src="/images/purple-bowl.svg" alt="Purple Mask" />
            </div>
            <div>
                <div className='mask-content flex flex-col items-center sticky bottom-auto right-auto left-0 overflow-hidden'
                    style={{
                        willChange: 'width, height',
                        height: `${height}px`, // Use dynamic height
                        transform: `translateY(${translateY}px)`,
                    }}>
                    <h1 className='semifold text-white text-center block'>Everything will be ready in just 10 minutes</h1>
                </div>
            </div>
        </>
    );
};

export default PurpleMask;
