import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Popover from './Popover'
import useClickAway from '../hooks/useClickAway'

export default function Navbar({ closeMenuRef, navbarRef }) {
	const dropDownContainerRef = useRef(null)
	const [dropdown, setDropdown] = useState(false);
	useClickAway(dropDownContainerRef, setDropdown)
	const products = [
		{ href: '/products/applications', text: 'Applications', icon: 'fa fa-terminal' },
		{ href: '/products/websites', text: 'Websites', icon: 'fa fa-globe' }
	]

	return (
		<nav ref={ navbarRef } id="nav-menu" className="navlinks transition-all z-50 ease-in-out duration-500 shadow md:shadow-none md:bg-transparent bg-white fixed top-0 md:top-4 lg:top-6 -right-full md:right-8 xl:right-16 xl:mr-1 flex flex-col md:flex-row justify-between md:justify-end md:items-center w-10/12 md:w-auto h-screen md:h-16 text-gray-600 lg:p-4">
			<div className="md:hidden flex flex-grow-0 flex-shrink justify-between content-center mb-2 text-left w-full text-2xl px-5 md:px-8 py-4">
				<h1 id="navbar-title" className="h-12 w-64 flex justify-start items-center transform scale-65 origin-left transition-all ease-in-out duration-1000">
					<img src="/images/logo/algrith-brand.jpg" alt="brand-logo" />
				</h1>
				<div ref={ closeMenuRef } id="close-menu" className="flex justify-center h-12 w-12 bg-gray-300 rounded-xl text-xl items-center text-black">
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
				<span ref={ dropDownContainerRef } onClick={() => setDropdown(!dropdown)} className="flex items-center justify-between cursor-pointer ripple-node transition all ease-in-out duration-400 my-2 mx-auto md:mx-4 px-0 md:p-2 hover:border-opacity-100 border-green-400 border-b-4 border-opacity-0 text-left md:text-center w-full md:w-auto text-xl font-bold text-gray-600">
					Products
					<svg className="inline ml-4" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="currentColor"></path>
					</svg>
					<Popover toggle={dropdown} items={products} />
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
					<img src="/images/logo/algrith.png" alt="brand logo" className="logo inline-flex" />
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