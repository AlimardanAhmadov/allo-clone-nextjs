'use client'

import React, { useState, useEffect } from 'react';
import '../Devices/Devices.css';
import Desktop from './Images/Desktop-1';
import Mobile from './Images/Mobile-3';
import Tablet from './Images/Tablet-2';

const Devices = () => {
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 6900;

            if (scrollPosition > threshold) {
                const translateYValue = Math.min((scrollPosition - threshold) / 1.6, 800);
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


    const style = {
        willChange: 'transform',
        transform: `translate3d(0px, ${translateY}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-out'
    }

    return (
        <div className='devices relative h-auto' style={{ height: '1000px' }}>
            <div className='devices-text-block flex flex-col items-center relative left-0 right-0 bottom-0' style={style}>
                <h2 className='semibold text-center my-auto'>Works Everywhere</h2>
                <h4 className='w-auto text-center'>You can use your existing mobile, tablet, and desktop, including receipt printers to use allO.</h4>
                <div className='device-icons flex flex-row'>
                    <img src="/images/devices/apple.svg" alt="Apple" />
                    <img src="/images/devices/android.svg" alt="Android" />
                    <img src="/images/devices/windows.svg" alt="Windows" />
                </div>
            </div>
            <div className='static block' style={{ height: '310px' }}></div>
            <div className='devices-mobile-screen hidden'>
                <img 
                    src="/images/devices-mobile-screen" 
                    loading="lazy" 
                    sizes="100vw" 
                    srcSet="
                        /images/devices-mobile-screen.png 500w, 
                        /images/devices-mobile-screen.png 800w, 
                        /images/devices-mobile-screen.png 1080w, 
                        /images/devices-mobile-screen.png 1500w" 
                    alt=""
                />
            </div>
            <div className='landing-mobile-1 absolute right-auto left-auto' style={{ top: '50%', right: '12%', zIndex: '-3' }}>
                <img 
                    style={{ width: '229px' }}
                    src="/images/mobile-phone-1.png" 
                    loading="lazy" 
                    sizes="(max-width: 767px) 100vw, 228.99307250976562px" 
                    srcSet="
                        /images/mobile-phone-1.png 500w, 
                        /images/mobile-phone-1.png 512w" 
                    alt="" 
                    />
            </div>
            <div className='landing-mobile-2 absolute right-auto bottom-auto' style={{ left: '9%', top: '85%' }}>
                <img 
                    style={{ width: '214px' }}
                    src="/images/mobile-phone-2.png" 
                    loading="lazy" 
                    sizes="(max-width: 767px) 100vw, 213.99307250976562px" 
                    srcSet="
                        /images/mobile-phone-2.png 500w, 
                        /images/mobile-phone-2.png 512w" 
                    alt="" 
                />
            </div>
            <Desktop />
            <Mobile />
            <div className='landing-tablet-1 object-fill absolute'>
                <img 
                    style={{ height: '554px' }}
                    src="/images/devices-tablet-2.png" 
                    loading="eager" 
                    sizes="(max-width: 767px) 100vw, 753.8975830078125px" 
                    srcSet="
                        /images/devices-tablet-2.png 500w, 
                        /images/devices-tablet-2.png 800w, 
                        /images/devices-tablet-2.png 1080w, 
                        /images/devices-tablet-2.png 1600w, 
                        /images/devices-tablet-2.png 2000w, 
                        /images/devices-tablet-2.png 2600w, 
                        /images/devices-tablet-2.png 3017w" 
                    alt="" 
                    className="w-auto max-w-none object-fill perspective-origin-center transform-origin-center"
                    />

            </div>
            <Tablet />
            <div style={{ height: '850px' }}></div>
        </div>
    );
};

export default Devices;
