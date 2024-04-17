'use client'

import '../Pricing/Pricing.css';
import { useState, useEffect } from 'react';

const images = [
    { src: "/images/slider-images/coffee.svg", style: { maxWidth: 'none', marginTop: '65px' } },
    { src: "/images/slider-images/bubble-tea.svg", style: { maxWidth: 'none', marginRight: '0' } },
    { src: "/images/slider-images/sushis.svg", style: { maxWidth: 'none', marginTop: '-29px' } },
    { src: "/images/slider-images/pizza.svg", style: { maxWidth: 'none', marginTop: '-29px', marginLeft: '-61px' } },
    { src: "/images/slider-images/plate.svg", style: { maxWidth: 'none', marginTop: '-24px' } },
    { src: "/images/slider-images/fries.svg", style: { maxWidth: 'none', marginTop: '-24px', marginLeft: '-57px' } },
    { src: "/images/slider-images/pasta.svg", style: { maxWidth: 'none', marginTop: '-25px', marginLeft: '-23px' } }
];

export default function Pricing() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  

    return (
        <div className='relative pricing' style={{ top: '1040px' }}>
            <div className='pricing-title mx-auto'>
                <h1 className='semibold my-auto text-left'>At Super Affordable Price</h1>
                <h4>One month free trial. No fixed contract period. Cancel anytime.</h4>
            </div>
            <div className='pricing-block mx-auto flex'>
                <div className='pricing-item px-0'>
                    <div className='standard flex justify-between overflow-hidden'>
                        <div className='pricing-info__standard'>
                            <h4 className='semibold pricing-type mt-auto'>Standard</h4>
                            <h1 className='price text-white mt-top'>
                                99€
                                <span className='price-duration text-white'> /month</span>
                            </h1>
                            <div className='pricing-tags flex flex-col justify-center'>
                                <div className='tag pricing-tags whitespace-no-wrap flex justify-center flex-row mr-auto'>
                                    <h3 className='tag-content text-white text-center'>Unlimited Licenses</h3>
                                </div>
                                <div className='tag pricing-tags whitespace-no-wrap flex justify-center flex-row mr-auto'>
                                    <h3 className='tag-content text-white text-center'> &gt; 15 features included</h3>
                                </div>
                            </div>
                            <h4 className='pricing-desc text-white text-left my-0 underline-none static'>
                                Best choice for small restaurants like cafe, bubble tea, fast-food kiosk, etc.
                            </h4>
                        </div>

                        <div className='pricing-standard__animation overflow-visible static flex flex-col h-auto items-start justify-start'>
                            <div className='animation-slider text-center clear-both relative block bg-transparent h-auto'>
                                <div className='absolute top-0 left-0 right-0 bottom-0 slider-mask overflow-visible z-1 h-full white-space-nowrap block'>
                                    {images.map((image, index) => (
                                        <div
                                        key={index}
                                        className={`align-top w-full h-full whitespace-normal text-left inline-block relative ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                        style={{ transition: 'opacity 200ms ease-in 0s', visibility: currentImageIndex === index ? 'visible' : 'hidden' }}
                                        >
                                        <img
                                            className='slider-image'
                                            src={image.src}
                                            alt={`Image ${index}`}
                                            style={image.style}
                                        />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pricing-item px-0'>
                    <div className='pricing-info__standard premium'>
                        <h4 className='semibold pricing-type mt-auto'>Premium</h4>
                        <h1 className='price text-white mt-top'>
                            199€ 
                            <span className='price-duration text-white'> /month</span>
                        </h1>
                        <div className='pricing-tags flex flex-col justify-center'>
                            <div className='tag pricing-tags whitespace-no-wrap flex justify-center flex-row mr-auto'>
                                <h3 className='tag-content text-white text-center'>Unlimited Licenses</h3>
                            </div>
                            <div className='tag pricing-tags whitespace-no-wrap flex justify-center flex-row mr-auto'>
                                <h3 className='tag-content text-white text-center'> &gt; 25 features included</h3>
                            </div>
                        </div>
                        <h4 className='pricing-desc text-white text-left my-0 underline-none static'>
                            Best choice for full-service and medium-size restaurants like fine dining and buffet, etc.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}