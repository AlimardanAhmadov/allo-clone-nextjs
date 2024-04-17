import { useEffect, useState } from 'react';
import SvgAnimation from "../../Animations/SvgAnimation";

const MovingDashboard = () => {
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const maxTranslateY = -2055;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newTranslateY = Math.min(scrollPosition / 800, 1) * maxTranslateY;
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
        <>
            <div className="dashboard-tablet-view mx-auto relative w-full" style={ style }>
                <img src="/images/dashboard-tablet.png" loading="lazy" sizes="(max-width: 1439px) 100vw, 1000.0000610351562px" alt="Tablet View" className="block"/>
            </div>
            <div className="dashboard-tablet-view mobile mx-auto relative w-full">
                <img src="/images/dashboard-mobile.png" loading="lazy" sizes="(max-width: 1439px) 100vw, 1000.0000610351562px" alt="Tablet View" className="block"/>
            </div>
        </>
    );
}

export default MovingDashboard;
