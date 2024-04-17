import React, { useState, useEffect } from 'react';
import '../Images/Tablet-2.css';

const Tablet = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Calculate the translateY value based on scroll position
    const translateYValue = Math.max(-600, -600 - ((scrollPosition - 9200) / 10));

    return (
        <div className='landing-tablet-2 bottom-auto right-auto absolute' style={{ willChange: 'transform', transform: `translate3d(0px, ${translateYValue}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` }}>
            <img
                style={{ maxWidth: '120%' }}
                src="/images/devices-tablet-3.png"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 127.3263931274414px, (max-width: 1439px) 46vw, 630px"
                srcSet="
                    /images/devices-tablet-3.png 500w,
                    /images/devices-tablet-3.png 800w,
                    /images/devices-tablet-3.png 1080w,
                    /images/devices-tablet-3.png 1600w,
                    /images/devices-tablet-3.png 2000w,
                    /images/devices-tablet-3.png 2632w"
                alt=""
                className="w-auto"
            />
        </div>
    );
};

export default Tablet;
