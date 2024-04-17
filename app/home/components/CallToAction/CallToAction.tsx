'use client'

import '../CallToAction/CallToAction.css';
import { useState, useEffect } from 'react';
import Figure from './Figures/Figure-1/Figure';
import Figure2 from './Figures/Figure-2/Figure';
import Figure3 from './Figures/Figure-3/Figure';
import Figure4 from './Figures/Figure-4/Figure';

export default function CTA() {
    const [translateY, setTranslateY] = useState(0);
    const [height, setHeight] = useState('145vh');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 11000;

            if (scrollPosition > threshold) {
                const translateYValue = Math.min((scrollPosition - threshold) / 1.6, 100);
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
        <div style={{ top: '1040px' }} className='cta-block mt-auto pt-0 relative overflow-hidden'>
            <div className='cta-content-block flex flex-col justify-center items-center mx-auto'>
                <h1 className='semibold text-center mt-auto'>Start using allO today!</h1>
                <h1 className='semibold mx-auto text-center mt-0'>No sales pitch. No appointment. Just watch the demo and go</h1>
                <a type='button' className="primary-button medium-button" href="#">Start allO now</a>
            </div>

            <div className='cta-tablet-section relative mx-auto' style={{ willChange: 'transform', transform: `translate3d(0px, ${translateY}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d' }}>
                <img
                    src="/images/cta-tablet.png"
                    loading="lazy"
                    sizes="(max-width: 1439px) 100vw, 1200px"
                    srcSet="
                        /images/cta-tablet.png 500w,
                        /images/cta-tablet.png 800w,
                        /images/cta-tablet.png 1080w,
                        /images/cta-tablet.png 1600w,
                        /images/cta-tablet.png 2000w,
                        /images/cta-tablet.png 2600w,
                        /images/cta-tablet.png 3200w,
                        /images/cta-tablet.png 4142w"
                    alt=""
                    className="fixed w-full"
                />
                <Figure />
                <Figure2 /> 
                <Figure3 />
                <Figure4 />
            </div>
        </div>
    );
}