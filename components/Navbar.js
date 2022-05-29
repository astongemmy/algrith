import React, { useState } from 'react'
import Link from 'next/link'
import Popover from './Popover'

export default function Header({ close_nav_bar }) {
    const [dropdown, setDropdown] = useState(false);

    const products = [
        { href: '/products/applications', text: 'Applications', icon: 'fa fa-terminal' },
        { href: '/products/websites', text: 'Websites', icon: 'fa fa-globe' }
    ]
    return (
        <nav id="nav-menu" className="navlinks transition-all z-50 ease-in-out duration-500 shadow md:shadow-none md:bg-transparent bg-white fixed top-0 md:top-4 lg:top-6 -right-full md:right-12 flex flex-col md:flex-row justify-between md:justify-end md:items-center w-10/12 md:w-auto h-screen md:h-16 text-gray-600 lg:p-4">
            <div className="md:hidden flex flex-grow-0 flex-shrink justify-between content-center mb-2 text-left w-full text-2xl px-5 md:px-8 py-4">
                <h1 id="navbar-title" className="h-12 w-64 flex justify-start items-center transform scale-65 origin-left transition-all ease-in-out duration-1000">
                    <img src="../images/logo/algrith-brand.jpg" alt="brand-logo" />
                </h1>
                <div id="close-menu" onClick={close_nav_bar} className="flex justify-center h-12 w-12 bg-gray-300 rounded-xl text-xl items-center text-black">
                    <i className="fa fa-times"></i>
                </div>
            </div>
            <div id="navbar-links" className="flex flex-col md:flex-row flex-grow flex-shrink-0 w-11/12 md:w-full p-2 rounded-xl my-4 lg:my-0 mx-auto">
                <Link href="/">
                    <a className="ripple-node transition all ease-in-out duration-400 my-2 mx-auto md:mx-2 px-0 md:p-2 hover:border-opacity-100 border-green-400 border-b-4 border-opacity-0 text-left md:text-center w-full md:w-auto text-xl font-bold text-gray-600">
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a className="ripple-node transition all ease-in-out duration-400 my-2 mx-auto md:mx-4 px-0 md:p-2 hover:border-opacity-100 border-green-400 border-b-4 border-opacity-0 text-left md:text-center w-full md:w-auto text-xl font-bold text-gray-600">
                        About
                    </a>
                </Link>
                <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer ripple-node transition all ease-in-out duration-400 my-2 mx-auto md:mx-4 px-0 md:p-2 hover:border-opacity-100 border-green-400 border-b-4 border-opacity-0 text-left md:text-center w-full md:w-auto text-xl font-bold text-gray-600">
                    Products
                    <Popover toggle={dropdown} items={ products } />
                </span>
                <Link href="/contact-us">
                    <a className="ripple-node transition all ease-in-out duration-400 my-2 mx-auto md:mx-4 px-0 md:p-2 hover:border-opacity-100 border-green-400 border-b-4 border-opacity-0 text-left md:text-center w-full md:w-auto text-xl font-bold text-gray-600">
                        Contact
                    </a>
                </Link>
            </div>
            <div className="md:hidden flex justify-between items-center flex-grow-0 flex-shrink relative p-4 w-full bg-gray-200 mt-2">
                <div id="navbar-footer-brand" data-aos="fade-right" className="inline-flex items-center h-full">
                    © Copyright <span className="mx-1 text-navyblue"> Algrith {new Date().getFullYear()} </span>
                    <img src="../images/logo/algrith.png" alt="brand logo" className="logo inline-flex" />
                </div>
                <div id="navbar-footer-socials" className="flex justify-center items-center h-full">
                    <span data-aos="fade-left" className="flex justify-center mx-1 items-center rounded-xl text-gray-600 text-xl h-8 w-8 bg-gray-300">
                        <i className="fab fa-facebook"></i>
                    </span>
                    <span data-aos="fade-left" className="flex justify-center mx-1 items-center rounded-xl text-gray-600 text-xl h-8 w-8 bg-gray-300">
                        <i className="fab fa-twitter"></i>
                    </span>
                    <span data-aos="fade-left" className="flex justify-center mx-1 items-center rounded-xl text-gray-600 text-xl h-8 w-8 bg-gray-300">
                        <i className="fab fa-linkedin"></i>
                    </span>
                </div>
            </div>
        </nav>
    )
}