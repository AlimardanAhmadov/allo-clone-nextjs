import { useEffect, useRef, useState } from 'react';
import SvgAnimation from '../../Animations/SvgAnimation';

const MovingSushi = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const sushiRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const newPosition = window.scrollY;
            setScrollPosition(newPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const initialTranslateX = 15;
    const finalTranslateX = 32;
    const initialTranslateY = 0;
    const midTranslateY = -31.5;
    const finalTranslateY = -540;
    const maxScroll = 600;

    let translateX;
    let translateY;

    if (scrollPosition <= maxScroll / 3) {
        const scrollPercentage = scrollPosition / (maxScroll / 3);
        translateY = initialTranslateY + (midTranslateY * scrollPercentage);
    } else if (scrollPosition <= (2 * maxScroll) / 3) {
        const scrollPercentage = (scrollPosition - (maxScroll / 3)) / (maxScroll / 3);
        translateY = midTranslateY - (midTranslateY * scrollPercentage);
    } else {
        const scrollPercentage = (scrollPosition - (2 * maxScroll)) / maxScroll;
        translateY = initialTranslateY - (midTranslateY + (finalTranslateY - midTranslateY) * scrollPercentage);
        translateY = Math.min(translateY, finalTranslateY);

    }

    if (scrollPosition <= maxScroll / 2) {
        const scrollPercentage = scrollPosition / (maxScroll / 2);
        translateX = initialTranslateX - (initialTranslateX * scrollPercentage);
        
    } else {
        const scrollPercentage = (scrollPosition - (maxScroll / 2)) / (maxScroll / 2);
        translateX = finalTranslateX * scrollPercentage;
        translateX = Math.min(translateX, finalTranslateX);
    }

    return (
        <div
            className="moving-sushi"
            style={{
                willChange: 'transform',
                transform: `translate3d(${translateX}px, ${translateY}px, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out'
            }}
            ref={sushiRef}
        >
            <SvgAnimation path="/images/sushi.json" containerId="sushi-container" />
        </div>
    );
};

export default MovingSushi;