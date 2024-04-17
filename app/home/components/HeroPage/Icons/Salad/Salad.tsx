import { useEffect, useRef, useState } from 'react';
import SvgAnimation from '../../Animations/SvgAnimation';
import '../Salad/Salad.css';

const MovingSalad = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [scale, setScale] = useState<number>(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxTranslateX = -75;
            const maxTranslateY = -1000;
            const maxScale = 1.7;

            let newTranslateX = Math.min(scrollPosition / 100, 1) * maxTranslateX;
            let newTranslateY;
            let newScale;
        
            if (newTranslateX === maxTranslateX) {
                newTranslateY = Math.min((scrollPosition - 100) / 700, 1) * maxTranslateY;
        
                newTranslateX = Math.max(newTranslateX + (scrollPosition - 100) / 100, 0);
            } else {
                newTranslateY = 0;
            }

            if (newTranslateY <= -89) {
                newScale = Math.min((scrollPosition - 100) / 1000, 1) * (maxScale - 1) + 1;
            } else {
                newScale = 1;
            }
        
            setTranslateX(newTranslateX);
            setTranslateY(newTranslateY);
            setScale(newScale);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={divRef}
            className="moving-salad"
            style={{
                willChange: 'transform',
                transform: `translate3d(${translateX}px, ${translateY}px, 0) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out'
            }}
        >
            <SvgAnimation path="/images/salad.json" containerId="salad-container" />
        </div>
    );
};

export default MovingSalad;
