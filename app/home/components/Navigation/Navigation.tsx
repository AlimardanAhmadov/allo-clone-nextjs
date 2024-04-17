'use client'

import '../Navigation/Navigation.css';
import { useState } from 'react';


export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex flex-col items-center mx-auto'>
            <div className="container py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#">
                    <svg width="54" height="22" viewBox="0 0 54 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7169 21.5893H23.1173L23.1173 0.41181L19.7169 0.41181L19.7169 21.5893Z" fill="#333332"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M43.0454 22C49.0955 22 54 17.0751 54 11C54 4.92487 49.0955 0 43.0454 0C36.9954 0 32.0908 4.92487 32.0908 11C32.0908 17.0751 36.9954 22 43.0454 22ZM43.0451 18.5858C47.2171 18.5858 50.5992 15.1897 50.5992 11.0004C50.5992 6.81105 47.2171 3.41494 43.0451 3.41494C38.873 3.41494 35.491 6.81105 35.491 11.0004C35.491 15.1897 38.873 18.5858 43.0451 18.5858Z" fill="#333332"/>
                        <path d="M26.1082 21.5578H29.5087V0.41181C27.6306 0.41181 26.1082 1.94059 26.1082 3.82643V21.5578Z" fill="#333332"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.3301 7.06598C12.0206 5.96505 10.3986 5.2054 8.36262 5.2054C3.74407 5.2054 0 8.965 0 13.6027C0 18.2404 3.74407 22 8.36262 22C10.3981 22 12.0206 21.247 13.3301 20.1461L13.4295 21.5895H16.7254L16.7254 5.61686L13.4307 5.61686L13.3301 7.06598ZM13.3296 13.603C13.3296 16.3577 11.1057 18.5909 8.36234 18.5909C5.619 18.5909 3.39508 16.3577 3.39508 13.603C3.39508 10.8483 5.619 8.61516 8.36234 8.61516C11.1057 8.61516 13.3296 10.8483 13.3296 13.603Z" fill="#333332"/>
                    </svg>

                    </a>

                    <div className="flex lg:hidden">
                        <div className="flex items-center gap-2 text-gray-500 className hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <a x-show="!isOpen" type="button" className="primary-button medium-button" href="#">Try for free</a>

                            <img className="cursor-pointer" src="/images/x-close.svg" alt="Close" onClick={toggleMenu} style={{ display: isOpen ? 'block' : 'none' }} />
                            <img className="cursor-pointer" src="/images/burger.svg" alt="Burger Menu" onClick={toggleMenu} style={{ display: isOpen ? 'none' : 'block' }} />
                        </div>
                    </div>
                </div>

                <div className={`nav-menu absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'md:flex' : 'hidden'}`}>
                    <div className="flex flex-col md:flex-row items-center">
                        <a className="nav-link my-2 font-light transition-colors duration-300 transform md:mx-3 md:my-0" href="#">Product</a>
                        <a className="nav-link my-2 font-light transition-colors duration-300 transform md:mx-3 md:my-0" href="#">Pricing</a>
                        <a className="nav-link flex items-center gap-1 my-2 font-light transition-colors duration-300 transform md:mx-3 md:my-0" href="#">
                            Company
                            <svg width=".8em" height=".8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                            </svg>
                        </a>
                        <a className="nav-link my-2 font-light transition-colors duration-300 transform md:mx-3 md:my-0" href="#">Login</a>
                        <a type='button' className="primary-button medium-button" href="#">Try for free</a>
                        <div className='links-area mobile row'>
                            <h2 className='semibold links-header text-left'>
                                Operation
                            </h2>
                            <ul className='links-list pl-0 list-none'>
                                <li className='footer-link'>
                                    <a className='semibold text-left underline-none static' href="">allO POS</a>
                                </li>
                                <li className='footer-link'>
                                    <a className='semibold text-left underline-none static' href="">Floor Plan</a>
                                </li>
                                <li className='footer-link'>
                                    <a className='semibold text-left underline-none static' href="">Menu Editor</a>
                                </li>
                                <li className='footer-link'>
                                    <a className='semibold text-left underline-none static' href="">Order History</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}