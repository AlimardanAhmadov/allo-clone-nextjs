'use client'

import React, { useState } from 'react';
import '../Slider/Slider.css';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? 2 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 2 ? 0 : prevSlide + 1));
    };

    const handleSlideClick = (slideIndex:number) => {
        setCurrentSlide(slideIndex);
    };

    const slides = [
        {
            imageSrc: '/images/Slide-1.png',
            description: '"Thanks to allO, we now make 200% revenue compared to the pre-pandemic time."',
            author: 'Zhang L.',
            position: 'Manager at Seen Restaurant',
            backgroundColor: '#193047',
        },
        {
            imageSrc: '/images/Slide-2.png',
            description: '“With allO, I can manage my 8 restaurants simply, with one account on my mobile.”',
            author: 'Paul C.',
            position: 'Chain owner of Ledu',
            backgroundColor: '#2b574b',
        },
        {
            imageSrc: '/images/Slide-3.png',
            description: '“After using allO, I now spend less than 15min a day to review my business.”',
            author: 'Guo M.',
            position: 'Manager at Ya The Mandarin Room',
            backgroundColor: '#403754'
        }
    ];

    const slideTransforms = [
        [
            { transform: 'translateX(0px)', zIndex: 1 },
            { transform: 'translateX(100%)', zIndex: 0 },
            { transform: 'translateX(0px)', zIndex: 0 }
        ],
        [
            { transform: 'translateX(0px)', zIndex: 0 },
            { transform: 'translateX(0px)', zIndex: 1 },
            { transform: 'translateX(100%)', zIndex: -1 }
        ],
        [
            { transform: 'translateX(100%)', zIndex: 0 },
            { transform: 'translateX(0px))', zIndex: 0 },
            { transform: 'translateX(0px)', zIndex: 1 }
        ]
    ];    

    return (
        <div className='testimonials overflow-hidden'>
            <div className='testimonials-section overflow-hidden relative'>
                <div id="default-carousel" className="relative h-auto bg-transparent block text-center clear-both" data-carousel="slide">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96" style={{ height: '520px', transition: 'transform 0.5s ease'}}>
                        {slides.map((slide, index) => (
                            <div
                                style={{ backgroundColor: slide.backgroundColor, ...slideTransforms[currentSlide][index], transition: 'transform 500ms ease 0s' }}
                                key={index}
                                className={`block duration-700 ease-in-out flex items-center h-full overflow-hidden flex justify-between testimonial-card w-full absolute flex`}
                                data-carousel-item
                            >
                                <div className='testimonial-content flex flex-col justify-between h-full'>
                                    <h1 className='text-white my-0 text-left'>{slide.description}</h1>
                                    <div className='restaurant-info text-left'>
                                        <h4 className='text-white mt-auto'>{slide.author}</h4>
                                        <h4 className='text-white mb-0'>{slide.position}</h4>
                                    </div>
                                </div>
                                <div className='testimonial-pic flex-none overflow-visible object-fill w-full h-full relative'>
                                    <img
                                        src={slide.imageSrc}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 93vw, 100vw"
                                        srcSet={`${
                                            slide.imageSrc
                                        } 500w, ${
                                            slide.imageSrc
                                        } 800w, ${
                                            slide.imageSrc
                                        } 1080w, ${
                                            slide.imageSrc
                                        } 1600w, ${
                                            slide.imageSrc
                                        } 2000w, ${
                                            slide.imageSrc
                                        } 2384w`}
                                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full"
                                        aria-hidden="true"
                                        alt={`Slide ${index + 1}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-1.5 rtl:space-x-reverse">
                        {[0, 1, 2].map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`slide-button cursor-pointer relative inline-block rounded-full ${
                                    index === currentSlide
                                        ? 'bg-white'
                                        : 'bg-white bg-opacity-40'
                                }`}
                                aria-current={index === currentSlide}
                                aria-label={`Slide ${index + 1}`}
                                onClick={() => handleSlideClick(index)}
                                data-carousel-slide-to={index}
                            ></button>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev
                        onClick={handlePrevSlide}
                    >
                        <span className="inline-flex items-center justify-center rounded-full" style={{ height: '40px', width: '40px' }}>
                            <img className='h-full w-full' src="/images/leftArrow.svg" alt="Left Arrow" />
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>

                    <button
                        type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next
                        onClick={handleNextSlide}
                    >
                        <span className="inline-flex items-center justify-center rounded-full" style={{ height: '40px', width: '40px' }}>
                            <img className='h-full w-full' src="/images/rightArrow.svg" alt="Right Arrow" />
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
