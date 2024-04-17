'use client'


import React, { useState, useEffect } from 'react';
import '../ManagersSection/ManagersSection.css';

interface ScrollableStates {
    [key: string]: {
        isBottomVisible: boolean;
    };
}

const ManagersSection = () => {
    const [scrollableStates, setScrollableStates] = useState<ScrollableStates>({});

    useEffect(() => {
        const handleScroll = () => {
            const managersDesigns = document.querySelectorAll('.managers-design');

            managersDesigns.forEach(managersDesign => {
                const managersDesignRect = managersDesign.getBoundingClientRect();
                const isBottomVisible = managersDesignRect.top <= window.innerHeight * 0.001;
                
                const id = managersDesign.id;
                
                setScrollableStates(prevState => ({
                    ...prevState,
                    [id]: {
                        isBottomVisible
                    }
                }));
            });
        };
        
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='z-1 justify-between px-0 flex relative overflow-visible managers-design' id='ui-for-managers' data-current-color="rgb(43, 87, 75)" data-bg-color='rgb(43, 87, 75)'>
                <div style={{ maxWidth: '1200px' }} className='w-full mx-auto relative overflow-visible'>
                    <div style={{ height: '100vh' }} className='z-1 flex flex-col justify-between mr-auto pt-0 flex sticky top-0 bottom-0 left-0 right-auto'>
                        <div className='design-content-column static'>
                            <h3 className='semibold my-0'>Designed for managers</h3>
                            <h4 className="text-left mb-0 flex underline-none">Staff, order, guest... Manage your entire business in one place </h4>
                            <ul role='list'>
                                <li className='block'>
                                    <a href="#designed-for-managers-1" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '1' }} />
                                        <h2 className='my-0 underline-none' style={{ color: 'rgb(255, 255, 255)' }}>Monitor dine-in orders on fingertips</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-2" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Track performance via simple dashboard</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-3" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Manage your team easily</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-4" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Maintain and update menu flexibly</h2>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='reference__card-1'>
                            <div className='reference__card-info flex items-start'>
                                <img style={{ width: '44px' }} src="/images/reference_card-chois.png" alt="Reference Avatar" />
                                <div className='customer-info flex flex-col items-start justify-between'>
                                    <h4 className='semifold text-white m-0'>Xie D.</h4>
                                    <h4 className='semifold text-white my-0 text-left static underline-none'>Manager at Chois Hotpot & Lounge</h4>
                                </div>
                            </div>
                            <h4 className='reference-quote text-white semifold my-0 text-left static underline-none'>
                                “After using allO, I spend 1 hour less per day than before in running my operation.”
                            </h4>
                        </div>
                    </div>
                    <div style={{ height: '100vh' }} className='z-1 flex flex-col justify-between mr-auto pt-0 sticky top-0 bottom-0 left-0 right-auto'>
                        <div className='slide-images-grid overflow-visible mt-0'>
                            <div className={`grid-right-images relative my-0 py-0 bg-transparent object-fill align-self-center justify-self-start`} style={{ height: '100vh', maxHeight: '100vh', overflow: scrollableStates['ui-for-managers']?.isBottomVisible ? 'auto' : 'hidden' }}>
                                <div id='designed-for-managers-1' className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/dine-in-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Dine In Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div id='designed-for-managers-2' className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-analytics-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Analytics Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div id='designed-for-managers-1' className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-team-management-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Team Management Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div id='designed-for-managers-1' className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-items-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Slider Items Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="background-overlay absolute top-0 bottom-0 left-0 right-0"
                    style={{ willChange: 'background, width, height', backgroundColor: 'rgb(43, 87, 75)', height: '0px' }}
                ></div>
            </div>
            <div className='z-1 justify-between px-0 flex relative overflow-visible managers-design mobile' id='ui-for-managers' data-current-color="rgb(43, 87, 75)" data-bg-color='rgb(43, 87, 75)'>
                <div style={{ maxWidth: '1200px' }} className='w-full mx-auto relative overflow-visible'>
                    <div style={{ height: '137vh' }} className='z-1 flex flex-col justify-between mr-auto pt-0 flex sticky top-0 bottom-0 left-0 right-auto'>
                        <div className='design-content-column static'>
                            <h3 className='semibold my-0'>Designed for managers</h3>
                            <h4 className="text-left mb-0 flex underline-none">Staff, order, guest... Manage your entire business in one place </h4>
                            <ul role='list'>
                                <li className='block'>
                                    <a href="#designed-for-managers-1" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '1' }} />
                                        <h2 className='my-0 underline-none' style={{ color: 'rgb(255, 255, 255)' }}>Monitor dine-in orders on fingertips</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-2" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Track performance via simple dashboard</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-3" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Manage your team easily</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-4" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Maintain and update menu flexibly</h2>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id='designed-for-managers-1' className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                            <img
                                className='static object-fill'
                                src="/images/dine-in-screen.png"
                                loading="eager"
                                sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                alt="Dine In Screen"
                                />
                        </div>
                        <div className='reference__card-1'>
                            <div className='reference__card-info flex items-start'>
                                <img style={{ width: '44px' }} src="/images/reference_card-chois.png" alt="Reference Avatar" />
                                <div className='customer-info flex flex-col items-start justify-between'>
                                    <h4 className='semifold text-white m-0'>Xie D.</h4>
                                    <h4 className='semifold text-white my-0 text-left static underline-none'>Manager at Chois Hotpot & Lounge</h4>
                                </div>
                            </div>
                            <h4 className='reference-quote text-white semifold my-0 text-left static underline-none'>
                                “After using allO, I spend 1 hour less per day than before in running my operation.”
                            </h4>
                        </div>
                    </div>
                </div>
                <div
                    className="background-overlay absolute top-0 bottom-0 left-0 right-0"
                    style={{ willChange: 'background, width, height', backgroundColor: 'rgb(43, 87, 75)', height: '0px' }}
                ></div>
            </div>
            <div className='z-1 justify-between px-0 flex relative overflow-visible managers-design mobile' id='ui-for-staff' data-current-color='rgb(43, 87, 75)' data-bg-color='rgb(25, 48, 71)'>
                <div style={{ maxWidth: '1200px' }} className='w-full mx-auto relative overflow-visible'>
                    <div style={{ height: '137vh' }} className='z-1 flex flex-col justify-between mr-auto pt-0 flex sticky top-0 bottom-0 left-0 right-auto'>
                        <div className='design-content-column static'>
                            <h3 className='semibold my-0'>Designed for managers</h3>
                            <h4 className="text-left mb-0 flex underline-none">Staff, order, guest... Manage your entire business in one place </h4>
                            <ul role='list'>
                                <li className='block'>
                                    <a href="#designed-for-managers-1" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '1' }} />
                                        <h2 className='my-0 underline-none' style={{ color: 'rgb(255, 255, 255)' }}>Monitor dine-in orders on fingertips</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-2" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Track performance via simple dashboard</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-3" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Manage your team easily</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-4" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Maintain and update menu flexibly</h2>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                            <img
                                className='static object-fill'
                                src="/images/dine-in-screen.png"
                                loading="eager"
                                sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                alt="Dine In Screen"
                            />
                        </div>
                        <div className='reference__card-1'>
                            <div className='reference__card-info flex items-start'>
                                <img style={{ width: '44px' }} src="/images/reference_card-chois.png" alt="Reference Avatar" />
                                <div className='customer-info flex flex-col items-start justify-between'>
                                    <h4 className='semifold text-white m-0'>Xie D.</h4>
                                    <h4 className='semifold text-white my-0 text-left static underline-none'>Manager at Chois Hotpot & Lounge</h4>
                                </div>
                            </div>
                            <h4 className='reference-quote text-white semifold my-0 text-left static underline-none'>
                                “After using allO, I spend 1 hour less per day than before in running my operation.”
                            </h4>
                        </div>
                    </div>
                    {/* <div style={{ height: '100vh' }} className='z-1 flex flex-col justify-between mr-auto pt-0 sticky top-0 bottom-0 left-0 right-auto'>
                        <div className='slide-images-grid overflow-visible mt-0'>
                            <div className={`grid-right-images relative my-0 py-0 bg-transparent object-fill align-self-center justify-self-start`} style={{ height: '100vh', maxHeight: '100vh', overflow: scrollableStates['ui-for-staff']?.isBottomVisible ? 'auto' : 'hidden' }}>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/dine-in-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Dine In Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-analytics-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Analytics Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-team-management-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Team Management Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-items-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Slider Items Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div
                    className="background-overlay absolute top-0 bottom-0 left-0 right-0"
                    style={{ willChange: 'background, width, height', backgroundColor: scrollableStates['ui-for-staff']?.isBottomVisible ? 'rgb(25, 48, 71)' : 'rgb(43, 87, 75)', height: '2014px', transition: 'background-color 0.7s ease' }}
                ></div>
            </div>
            <div className='z-1 justify-between px-0 flex relative overflow-visible managers-design' id='ui-for-staff' data-current-color='rgb(43, 87, 75)' data-bg-color='rgb(25, 48, 71)'>
                <div style={{ maxWidth: '1200px' }} className='w-full mx-auto relative overflow-visible'>
                    <div style={{ height: '100vh' }} className='z-1 flex flex-col justify-between mr-auto pt-0 flex sticky top-0 bottom-0 left-0 right-auto'>
                    <div className='design-content-column static'>
                            <h3 className='semibold my-0'>Designed for managers</h3>
                            <h4 className="text-left mb-0 flex underline-none">Staff, order, guest... Manage your entire business in one place </h4>
                            <ul role='list'>
                                <li className='block'>
                                    <a href="#designed-for-managers-1" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '1' }} />
                                        <h2 className='my-0 underline-none' style={{ color: 'rgb(255, 255, 255)' }}>Monitor dine-in orders on fingertips</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-2" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Track performance via simple dashboard</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-3" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Manage your team easily</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-4" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Maintain and update menu flexibly</h2>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='reference__card-1'>
                            <div className='reference__card-info flex items-start'>
                                <img style={{ width: '44px' }} src="/images/reference_card-chois.png" alt="Reference Avatar" />
                                <div className='customer-info flex flex-col items-start justify-between'>
                                    <h4 className='semifold text-white m-0'>Xie D.</h4>
                                    <h4 className='semifold text-white my-0 text-left static underline-none'>Manager at Chois Hotpot & Lounge</h4>
                                </div>
                            </div>
                            <h4 className='reference-quote text-white semifold my-0 text-left static underline-none'>
                                “After using allO, I spend 1 hour less per day than before in running my operation.”
                            </h4>
                        </div>
                    </div>
                    <div style={{ height: '100vh' }} className='z-1 flex flex-col justify-between mr-auto pt-0 sticky top-0 bottom-0 left-0 right-auto'>
                        <div className='slide-images-grid overflow-visible mt-0'>
                            <div className={`grid-right-images relative my-0 py-0 bg-transparent object-fill align-self-center justify-self-start`} style={{ height: '100vh', maxHeight: '100vh', overflow: scrollableStates['ui-for-staff']?.isBottomVisible ? 'auto' : 'hidden' }}>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/dine-in-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Dine In Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-analytics-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Analytics Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-team-management-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Team Management Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-items-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Slider Items Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="background-overlay absolute top-0 bottom-0 left-0 right-0"
                    style={{ willChange: 'background, width, height', backgroundColor: scrollableStates['ui-for-staff']?.isBottomVisible ? 'rgb(25, 48, 71)' : 'rgb(43, 87, 75)', height: '2014px', transition: 'background-color 0.7s ease' }}
                ></div>
            </div>
            <div className='z-1 justify-between px-0 flex relative overflow-visible managers-design mobile' id='ui-for-guests' data-current-color='' data-bg-color='rgb(64, 55, 84)'>
                <div style={{ maxWidth: '1200px' }} className='w-full mx-auto relative overflow-visible'>
                    <div style={{ height: '137vh' }} className='z-1 flex flex-col justify-between mr-auto pt-0 flex sticky top-0 bottom-0 left-0 right-auto'>
                    <div className='design-content-column static'>
                            <h3 className='semibold my-0'>Designed for managers</h3>
                            <h4 className="text-left mb-0 flex underline-none">Staff, order, guest... Manage your entire business in one place </h4>
                            <ul role='list'>
                                <li className='block'>
                                    <a href="#designed-for-managers-1" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '1' }} />
                                        <h2 className='my-0 underline-none' style={{ color: 'rgb(255, 255, 255)' }}>Monitor dine-in orders on fingertips</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-2" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Track performance via simple dashboard</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-3" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Manage your team easily</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-4" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Maintain and update menu flexibly</h2>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                            <img
                                className='static object-fill'
                                src="/images/dine-in-screen.png"
                                loading="eager"
                                sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                alt="Dine In Screen"
                            />
                        </div>
                        <div className='reference__card-1'>
                            <div className='reference__card-info flex items-start'>
                                <img style={{ width: '44px' }} src="/images/reference_card-chois.png" alt="Reference Avatar" />
                                <div className='customer-info flex flex-col items-start justify-between'>
                                    <h4 className='semifold text-white m-0'>Xie D.</h4>
                                    <h4 className='semifold text-white my-0 text-left static underline-none'>Manager at Chois Hotpot & Lounge</h4>
                                </div>
                            </div>
                            <h4 className='reference-quote text-white semifold my-0 text-left static underline-none'>
                                “After using allO, I spend 1 hour less per day than before in running my operation.”
                            </h4>
                        </div>
                    </div>
                </div>
                <div
                    className="background-overlay absolute top-0 bottom-0 left-0 right-0"
                    style={{ willChange: 'background, width, height', backgroundColor: scrollableStates['ui-for-guests']?.isBottomVisible ? 'rgb(64, 55, 84)' : 'rgb(25, 48, 71)', transition: 'background-color 0.7s ease' }}
                ></div>
            </div>
            <div className='z-1 justify-between px-0 flex relative overflow-visible managers-design' id='ui-for-guests' data-current-color='' data-bg-color='rgb(64, 55, 84)'>
                <div style={{ maxWidth: '1200px' }} className='w-full mx-auto relative overflow-visible'>
                    <div style={{ height: '100vh' }} className='z-1 flex flex-col justify-between mr-auto pt-0 flex sticky top-0 bottom-0 left-0 right-auto'>
                    <div className='design-content-column static'>
                            <h3 className='semibold my-0'>Designed for managers</h3>
                            <h4 className="text-left mb-0 flex underline-none">Staff, order, guest... Manage your entire business in one place </h4>
                            <ul role='list'>
                                <li className='block'>
                                    <a href="#designed-for-managers-1" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '1' }} />
                                        <h2 className='my-0 underline-none' style={{ color: 'rgb(255, 255, 255)' }}>Monitor dine-in orders on fingertips</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-2" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Track performance via simple dashboard</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-3" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Manage your team easily</h2>
                                    </a>
                                </li>
                                <li className='block'>
                                    <a href="#designed-for-managers-4" className='flex underline-none'>
                                        <img className='small-bowl' src="/images/small-bowl.svg" alt="Small Bowl" style={{ opacity: '0' }} />
                                        <h2 className='my-0 underline-none'>Maintain and update menu flexibly</h2>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='reference__card-1'>
                            <div className='reference__card-info flex items-start'>
                                <img style={{ width: '44px' }} src="/images/reference_card-chois.png" alt="Reference Avatar" />
                                <div className='customer-info flex flex-col items-start justify-between'>
                                    <h4 className='semifold text-white m-0'>Xie D.</h4>
                                    <h4 className='semifold text-white my-0 text-left static underline-none'>Manager at Chois Hotpot & Lounge</h4>
                                </div>
                            </div>
                            <h4 className='reference-quote text-white semifold my-0 text-left static underline-none'>
                                “After using allO, I spend 1 hour less per day than before in running my operation.”
                            </h4>
                        </div>
                    </div>
                    <div style={{ height: '100vh' }} className='z-1 flex flex-col justify-between mr-auto pt-0 sticky top-0 bottom-0 left-0 right-auto'>
                        <div className='slide-images-grid overflow-visible mt-0'>
                            <div className={`grid-right-images relative my-0 py-0 bg-transparent object-fill align-self-center justify-self-start`} style={{ height: '100vh', maxHeight: '100vh', overflow: scrollableStates['ui-for-guests']?.isBottomVisible ? 'auto' : 'hidden' }}>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/dine-in-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Dine In Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-analytics-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Analytics Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-team-management-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Team Management Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                                <div className='object-fit flex-row flex justify-end mx-0 pr-0 relative'>
                                    <img
                                        className='static object-fill'
                                        src="/images/slider-items-screen.png"
                                        loading="eager"
                                        sizes="(max-width: 767px) 100vw, 956.6754150390625px"
                                        alt="Slider Items Screen"
                                        style={{ height: '698px' }}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="background-overlay absolute top-0 bottom-0 left-0 right-0"
                    style={{ willChange: 'background, width, height', backgroundColor: scrollableStates['ui-for-guests']?.isBottomVisible ? 'rgb(64, 55, 84)' : 'rgb(25, 48, 71)', transition: 'background-color 0.7s ease' }}
                ></div>
            </div>
        </>
    );
};

export default ManagersSection;
