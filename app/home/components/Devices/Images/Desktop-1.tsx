import React, { useState, useEffect } from 'react';
import '../Images/Desktop-1.css';

const Desktop = () => {
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 5600;
    
            if (scrollPosition > threshold) {
                // Calculate the translateYValue to gradually decrease faster
                const translateYValue = -180 - ((scrollPosition - threshold) / 10);
                setTranslateY(translateYValue);
            } else {
                setTranslateY(0);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    
    return (
        <div className='landing-desktop-1 absolute bottom-0 right-auto' style={{ willChange: 'transform', transform: `translate3d(0px, ${translateY}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d' }}>
            <img 
                style={{ width: '893px' }}
                src="/images/devices-desktop-1.png" 
                loading="lazy" 
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 70vw, 892.9948120117188px" 
                srcSet="
                    /images/devices-desktop-1.png 500w, 
                    /images/devices-desktop-1.png 800w, 
                    /images/devices-desktop-1.png 1080w, 
                    /images/devices-desktop-1.png 1600w, 
                    /images/devices-desktop-1.png 2000w, 
                    /images/devices-desktop-1.png 2600w, 
                    /images/devices-desktop-1.png 3200w, 
                    /images/devices-desktop-1.png 3572w" 
                alt="" 
            />
        </div>
    );
};

export default Desktop;
