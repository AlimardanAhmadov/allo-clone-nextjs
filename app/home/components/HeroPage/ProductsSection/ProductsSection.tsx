'use client'

import "../ProductsSection/ProductsSection.css";
import { useState, useEffect } from 'react';


export default function ProductsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [translateY, setTranslateY] = useState(-250);
    const [translateZ, setTranslateZ] = useState(-1);
    const scrollThreshold = 450;

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > scrollThreshold) {
                const newTranslateY = Math.max(-250, Math.min(0, -250 + scrollPosition - scrollThreshold));
                const newTranslateZ = Math.max(-1, Math.min(0, -1 + scrollPosition - scrollThreshold));
                
                setTranslateY(newTranslateY);
                setTranslateZ(newTranslateZ);
            }
        };

        const images = document.querySelectorAll('.mobile-phone-markup') as NodeListOf<HTMLElement>;
        const descriptions = document.querySelectorAll('.markup-description') as NodeListOf<HTMLElement>;    

        for (let i = 0; i < images.length; i++) {
            images[i].style.transition = 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out';
            images[i].style.opacity = i === currentIndex ? '1' : '0';
            images[i].style.visibility = i === currentIndex ? 'visible' : 'hidden';
      
            descriptions[i].style.transition = 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out';
            descriptions[i].style.opacity = i === currentIndex ? '1' : '0';
            descriptions[i].style.visibility = i === currentIndex ? 'visible' : 'hidden';
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 3000);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, [currentIndex, ]);

    return (
        <div className="products-overview-section relative">
            <img src="/images/Salmon.svg" alt="Salmon" loading="lazy" className="half-salmon-circl-bg block" />
            <div className="orange-background"></div>
            <div className="products-section text-black mx-auto">
                <div className="products-section-title mb-8">
                    <h2 className="text-left my-0">Your all-in-one restaurant system</h2>
                </div>
                <div className="products-section-grid-layout">
                    <div className="grid-1 justify-between flex overflow-hidden">
                        <div className="flex flex-col gap-2 text-white">
                            <h4 className="font-semibold mt-auto text-lg" style={{ lineHeight: '24px', fontFamily: 'Inter, sans-serif' }}>allO Point-of-Sales (allO POS)</h4>
                            <h4 className="static my-0" style={{ lineHeight: '22px', fontFamily: 'Inter, sans-serif', fontWeight: '400', maxWidth: '336px' }}>The most powerful POS for gastronomy in Europe, the only system you need to manage your dine-in & takeaway orders, reservation, marketing, reporting, and staff in one place.</h4>
                        </div>
                        <div className="w-auto object-cover overflow-hidden">
                            <img src="/images/dashboard-tablet.png" alt="Dashboard" />
                        </div>
                    </div>
                    <div className="grid-2 flex flex-col justify-between text-black bg-white">
                        <div className="logos-holder items-start flex overflow-visible">
                            <div className="logo-col-1 flex flex-col justify-around">
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/paypal.svg" alt="PayPal" />
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/uber-eats.svg" alt="Uber Eats" />
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/transparent-logo.svg" alt="Transparent Logo" />
                            </div>
                            <div className="logo-col-2 flex flex-col justify-around relative">
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/upTransparent.svg" alt="Transparent Logo" />
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/google.webp" alt="Google" />
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/datev.svg" alt="Uber Eats" />
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/transparent-logo.svg" alt="Transparent Logo" />
                            </div>
                            <div className="logo-col-3 flex flex-col justify-around">
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/S.svg" alt="S" />
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/L.svg" alt="L" />
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/transparent-logo.svg" alt="Transparent Logo" />
                            </div>
                            <div className="logo-col-4 flex flex-col justify-around relative">
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/upTransparent.svg" alt="Transparent Logo" />
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/wolt.svg" alt="Wolt" />
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/Last.svg" alt="Last" />
                                <img className="logo-img w-auto h-auto object-contain flex-row flex relative overflow-invisible" src="/images/transparent-logo.svg" alt="Transparent Logo" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-black" style={{ padding: '24px', paddingTop: '0px' }}>
                            <h4 className="font-semibold mt-auto text-lg" style={{ lineHeight: '24px', fontFamily: 'Inter, sans-serif', color: '#333332' }}>allO App Store</h4>
                            <h4 className="static my-0" style={{ lineHeight: '22px', fontFamily: 'Inter, sans-serif', fontWeight: '400', maxWidth: '336px', color: '#333332' }}>No more complicated integrations! Find and install the feature you need at allO App Store within seconds.</h4>
                        </div>
                    </div>
                    <div className="grid-3 justify-between text-black bg-white flex flex-col">
                        <div className="text-black">
                            <h3 className="semibold text-xl">
                                Monitor and understand your business easily via <span style={{ color: '#ff8769' }}>beautiful dashboards</span> and reports.
                            </h3>
                        </div>
                        <div className="object-cover justify-end items-start flex overflow-hidden">
                            <img
                                src="/images/analytics-dashboard.png"
                                loading="eager"
                                sizes="472.99481201171875px"
                                alt="analytics dashboard"
                                className="object-fill backface-visible perspective-origin-center transform-origin-center transform-none"
                            />
                        </div>
                    </div>
                    <div className="grid-4 overflow-visible relative flex justify-end flex-col">
                        <div className="static">
                            <div
                                className="mobile-phone-markup online-ordering block object-fill absolute overflow-hidden"
                                style={{
                                    willChange: "width, height, transform",
                                    height: "500px",
                                    transform: `translate3d(0px, ${translateY}px, ${translateZ}px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                                    transformStyle: "preserve-3d",
                                    opacity: currentIndex === 0 ? '1' : '0',
                                }}
                            >
                                <img
                                    src="/images/online-ordering.png"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 85vw, (max-width: 991px) 91vw, (max-width: 1439px) 327.99481201171875px, 335.1215515136719px"
                                    alt="Online Ordering"
                                    className="h-auto"
                                    style={{ maxWidth: '92%' }}
                                />
                            </div>
                            <div
                                className="mobile-phone-markup scanner block object-fill absolute overflow-hidden"
                                style={{
                                    willChange: "width, height, transform",
                                    height: "500px",
                                    transform: `translate3d(0px, ${translateY}px, ${translateZ}px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                                    transformStyle: "preserve-3d",
                                    opacity: currentIndex === 0 ? '1' : '0',
                                }}
                                >
                                <img
                                    src="/images/scanner.png"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 85vw, (max-width: 991px) 91vw, (max-width: 1439px) 327.99481201171875px, 335.1215515136719px"
                                    className="h-auto"
                                    style={{ maxWidth: '92%' }}
                                />
                            </div>
                            <div
                                className="mobile-phone-markup calendar block object-fill absolute overflow-hidden"
                                style={{
                                    willChange: "width, height, transform",
                                    height: "500px",
                                    transform: `translate3d(0px, ${translateY}px, ${translateZ}px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                                    transformStyle: "preserve-3d",
                                    opacity: currentIndex === 0 ? '1' : '0',
                                }}
                                >
                                <img
                                    src="/images/calendar.png"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 85vw, (max-width: 991px) 91vw, (max-width: 1439px) 327.99481201171875px, 335.1215515136719px"
                                    alt="Calendar"
                                    className="h-auto"
                                    style={{ maxWidth: '92%' }}
                                />
                            </div>
                            <div
                                className="mobile-phone-markup widget"
                                style={{
                                    willChange: "width, height, transform",
                                    height: "500px",
                                    transform: `translate3d(0px, ${translateY}px, ${translateZ}px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                                    transformStyle: "preserve-3d",
                                    opacity: currentIndex === 0 ? '1' : '0',
                                }}
                                >
                                <img
                                    src="/images/widget.png"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 85vw, (max-width: 991px) 91vw, (max-width: 1439px) 327.99481201171875px, 335.1215515136719px"
                                    alt="Widget"
                                    className="h-auto"
                                    style={{ maxWidth: '92%' }}
                                />
                            </div>
                        </div>
                        <div className="overflow-visible z-10">
                            <div className="markup-description online-ordering absolute overflow-hidden bg-white block bottom-0 top-auto left-0 right-0" style={{ opacity: currentIndex === 0 ? '1' : '0' }}>
                                <h4>Online Ordering</h4>
                                <div className="block relative text-left">Make it convenient for your guests to order takeaway online and manage all orders at one place. Save 80% on commissions.</div>
                            </div>
                            <div className="markup-description scanner absolute overflow-hidden bg-white block bottom-0 top-auto left-0 right-0" style={{ opacity: currentIndex === 0 ? '1' : '0' }}>
                                <h4>Scan to Order & Pay at Table</h4>
                                <div className="block relative text-left">Your guests can order and pay at the table via scanning a QR code without waiting for waiters. Happy customers, happy staff.</div>    
                            </div>
                            <div className="markup-description calendar absolute overflow-hidden bg-white block bottom-0 top-auto left-0 right-0" style={{ opacity: currentIndex === 0 ? '1' : '0' }}>
                                <h4>Table Reservation</h4>
                                <div className="block relative text-left">Let your guests make table reservations online. No more messy calendar book. No more endless reservation calls every day.</div>
                            </div>
                            <div className="markup-description widget absolute overflow-hidden bg-white block bottom-0 top-auto left-0 right-0" style={{ opacity: currentIndex === 0 ? '1' : '0' }}>
                                <h4>All-in-one Customer Widget</h4>
                                <div className="block relative text-left">Convert your customer whenever and wherever by using allO All-in-one Customer Widget on your website.</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-5 cursor-pointer bg-white justify-between flex relative">
                        <div className="flex flex-col items-start justify-start">
                            <h4 className="semibold explore__more text-left" style={{ color: '#333332' }}>Explore all features</h4>
                            <h4 className="text-left my-0 text-base font-normal static no-underline leading-5" style={{ width: '200px', lineHeight: '22px', fontFamily: 'Inter,sans-serif', color: '#333332' }}>
                                One for every taste. <br /> Take a quick product tour and check out all features of allOS here.
                            </h4>
                        </div>
                        <div>
                            <img src="/images/bowls.svg" alt="Bowls" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
