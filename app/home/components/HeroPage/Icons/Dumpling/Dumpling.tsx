import React, { useEffect, useState } from 'react';
import SvgAnimation from '../../Animations/SvgAnimation';

const MovingDumpling = () => {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const maxTranslateX = 500;
        const changeNewTranslateX = 139;
        const maxTranslateY = -550;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newTranslateX;
            let newTranslateY;

            const threshold = 65;

            if (scrollPosition <= threshold) {
                newTranslateX = 0;
            } else if (scrollPosition <= 500 + threshold) {
                newTranslateX = (scrollPosition - threshold) * maxTranslateX / 400;
            } else {
                newTranslateX = maxTranslateX;
            }

            newTranslateX = Math.min(maxTranslateX, Math.max(0, newTranslateX));

            if (newTranslateX >= changeNewTranslateX) {
                const transitionRatio = (newTranslateX - changeNewTranslateX) / (maxTranslateX - changeNewTranslateX);
                newTranslateY = transitionRatio * maxTranslateY;
            } else {
                newTranslateY = 0;
            }

            setTranslateX(newTranslateX);
            setTranslateY(newTranslateY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="moving-dumpling"
            style={{
                willChange: 'transform',
                transform: `translate3d(${translateX}px, ${translateY}px, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out'
            }}
        >
            <SvgAnimation path="/images/dumpling.json" containerId="dumpling-container" />
        </div>
    );
};

export default MovingDumpling;
