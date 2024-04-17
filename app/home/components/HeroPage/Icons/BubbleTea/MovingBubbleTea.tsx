import { useEffect, useState } from 'react';
import SvgAnimation from "../../Animations/SvgAnimation";

const MovingBubbleTea = () => {
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const maxTranslateY = -1255;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newTranslateY = Math.min(scrollPosition / 1050, 1) * maxTranslateY;
            setTranslateY(newTranslateY);
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
    };

    return (
        <div className="moving-bubble-tea" style={style}>
            <SvgAnimation path="/images/bubble-tea.json" containerId="bubble-tea-container" />
        </div>
    );
}

export default MovingBubbleTea;
