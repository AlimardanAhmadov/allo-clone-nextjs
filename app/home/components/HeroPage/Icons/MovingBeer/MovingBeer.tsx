import { useEffect, useState } from 'react';
import SvgAnimation from "../../Animations/SvgAnimation";

const MovingBeer = () => {
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const maxTranslateY = -225;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newTranslateY = Math.min(scrollPosition / 200, 1) * maxTranslateY; // Adjust the divisor (200) to slow down the rate of change
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
        transition: 'transform 0.3s ease-out' // Smooth transition
    };

    return (
        <div className="moving-beer" style={style}>
            <SvgAnimation path="/images/beer.json" containerId="beer-container" />
        </div>
    );
}

export default MovingBeer;
