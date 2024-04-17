'use client'

import "../HeroPage/HeroPage.css";
import "../HeroPage/HeroResponsive.css";
import { useState, useEffect } from 'react';

import SvgAnimation from "../Animations/SvgAnimation";
import MovingSalad from "../Icons/Salad/Salad";
import MovingBeer from "../Icons/MovingBeer/MovingBeer";
import MovingTaco from "../Icons/Taco/Taco";
import MovingPasta from "../Icons/Pasta/Pasta";
import MovingCheers from "../Icons/Cheers/Cheers";
import MovingBurger from "../Icons/Burger/Burger";
import MovingDumpling from "../Icons/Dumpling/Dumpling";
import MovingBubbleTea from "../Icons/BubbleTea/MovingBubbleTea";
import MovingSushi from "../Icons/Sushi/Sushi";
import MovingDashboard from "../Icons/Dashboard/Dashboard";


export default function HeroPage() {
    const [scrollState, setScrollState] = useState({
        opacity: 1,
        scale: 1
    });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const threshold = 100; 

            if (!shouldAnimate && scrollPosition > threshold) {
                setShouldAnimate(true);
            }

            if (shouldAnimate) {
                const opacityValue = 1 - ((scrollPosition - threshold) / 100);
                const clampedOpacity = Math.min(1, Math.max(0, opacityValue));

                let scaleValue = 1 - ((scrollPosition - threshold) / 500);
                scaleValue = Math.min(1, Math.max(0.7, scaleValue));

                setScrollState({
                    opacity: clampedOpacity,
                    scale: scaleValue
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [shouldAnimate]);

    return (
        <div className="landing-section text-black mx-auto">
            <div className="landing-container container mx-auto">
                <div className="animation-container">
                    <MovingSalad />
                    <MovingBeer />
                    <MovingTaco />
                    <MovingPasta />
                    <MovingCheers />
                    <MovingBubbleTea />
                    <MovingBurger />
                    <MovingDumpling />
                    <MovingSushi />
                </div>

                <div className="animated-landing-text-block" style={{
                    opacity: shouldAnimate ? scrollState.opacity : 1,
                    transform: `scale(${shouldAnimate ? scrollState.scale : 1})`,
                    transition: 'opacity 0.005s ease, transform 0.005s ease'
                }}>
                    <div className="landing-title mb-2" style={{ marginTop: '1rem' }}>
                        <h1 className="text-center w-auto">
                            Run the restaurant <br /> your guests love
                        </h1>
                    </div>
                    <div className="landing-subtitle">
                        <h4 className="text-light text-center">
                            Discover the best all-in-one restaurant system <br /> to manage
                            operation and delight guests.
                        </h4>
                    </div>
                </div>
                <div className="hero-divider"></div>
                <MovingDashboard />
            </div>
        </div>
    );
}
