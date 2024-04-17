'use client'

import React, { useEffect, useState } from 'react';
import '../RestaurantModelList/RestaurantModelList.css';

const RestaurantModelList = () => {
    const [bowlHeight, setBowlHeight] = useState(594);
    const [overlayHeight, setOverlayHeight] = useState(0);
    const maxBowlHeight = 1200;
    const minBowlHeight = 594;
    const maxOverlayHeight = 3760; 
    const minOverlayHeight = 0;
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const listGridElement = document.querySelector('.list-grid');

            if (listGridElement) {
                const listGridRect = listGridElement.getBoundingClientRect();
                const isInView = listGridRect.top >= 0 && listGridRect.bottom <= window.innerHeight;
                setIsInView(isInView);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (isInView) {
                const listGridElement = document.querySelector('.list-grid');
                if (!listGridElement) return;

                const listGridRect = listGridElement.getBoundingClientRect();
                const scrollPercentage = Math.min(1, Math.max(0, (scrollPosition - 2620) / listGridRect.bottom));
                let newHeight = minBowlHeight + scrollPercentage * (maxBowlHeight - minBowlHeight);

                newHeight = Math.min(maxBowlHeight, newHeight);
                setBowlHeight(newHeight);

                let newOverlayHeight = scrollPosition * (maxOverlayHeight / listGridRect.bottom);
                newOverlayHeight = Math.min(maxOverlayHeight, Math.max(minOverlayHeight, newOverlayHeight));
                setOverlayHeight(newOverlayHeight);

                const backgroundOverlay = document.querySelector('.background-overlay') as HTMLElement;
                if (backgroundOverlay) {
                    if (bowlHeight === maxBowlHeight) {
                        setTimeout(() => {
                            backgroundOverlay.style.height = `${newOverlayHeight}px`;
                        }, 100);
                    }
                    else {
                        backgroundOverlay.style.height = `0px`;
                    }
                }
            } else {
                const newHeight = Math.max(minBowlHeight, bowlHeight - 0.5);
                setBowlHeight(newHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isInView, bowlHeight]);

    const models = [
        { title: 'Fast Food', imgSrc: '/images/list-icons/hotdog.svg' },
        { title: 'Fine Dining', imgSrc: '/images/list-icons/fine-dining.svg' },
        { title: 'Buffet', imgSrc: '/images/list-icons/buffet.svg' },
        { title: 'Sushi', imgSrc: '/images/list-icons/sushi.svg' },
        { title: 'Bubble Tea', imgSrc: '/images/list-icons/bubble-tea.svg' },
        { title: 'Hotpot', imgSrc: '/images/list-icons/hotpot.svg' },
        { title: 'Cafe', imgSrc: '/images/list-icons/cafe.svg' },
        { title: 'Food Truck', imgSrc: '/images/list-icons/food-truck.svg' },
        { title: 'Burger', imgSrc: '/images/list-icons/burger.svg' },
        { title: 'Fries', imgSrc: '/images/list-icons/fries.svg' },
        { title: 'Pasta', imgSrc: '/images/list-icons/pasta.svg' },
        { title: 'Pizza', imgSrc: '/images/list-icons/pizza.svg' }
    ];

    return (
        <div className='flex flex-col object-fill justify-start items-center mx-0 px-0 relative overflow-visible model-cards-list -z-1'>
            <div className='img-overlay h-auto object-contain flex flex-row justify-center overflow-hidden'>
                <img
                    id="bowl-image"
                    className='-z-2 max-w-full object-cover inline-block absolute top-0 bottom-auto left-0 right-0 mx-auto overflow-hidden'
                    src='/images/bowl.svg'
                    alt='bowl'
                    style={{ willChange: 'width, height', height: `${bowlHeight}px`, transition: 'height 0.3s ease-in-out' }}
                />
            </div>
            <div className='list-grid grid px-0 justify-stretch z-10'>
                {models.map((model, index) => (
                    <div className='object-fill bg-transparent flex-row justify-start items-stretch flex' key={index}>
                        <img src={model.imgSrc} alt="" />
                        <h4 className='text-white text-left object-fill my-0 overflow-visible model-title'>{model.title}</h4>
                    </div>
                ))}
            </div>
            <div className='list-grid grid mobile'>
                {models.map((model, index) => (
                    <div className='object-fill bg-transparent flex-row justify-start items-stretch flex' key={index}>
                        <img src={model.imgSrc} alt="" />
                        <h4 className='text-white text-left object-fill my-0 overflow-visible model-title'>{model.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantModelList;
