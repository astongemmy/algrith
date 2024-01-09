import Link from 'next/link';
import React from 'react';

const Navbar = ({ closeMenuRef, navbarRef }) => {
	return (
    <nav ref={ navbarRef } id="nav-menu" className="navlinks transition-all z-50 ease-in-out duration-500 shadow lg:shadow-none lg:bg-transparent bg-white dark:lg:bg-transparent dark:bg-dark-mode-primary fixed top-0 lg:top-0 -right-full lg:right-24 xl:right-32 lg:mr-3 flex flex-col lg:flex-row justify-between lg:justify-end lg:items-center w-10/12 md:w-5/12 lg:w-auto h-screen lg:h-16 text-gray-600 lg:p-4">
			<div className="lg:hidden flex flex-grow-0 flex-shrink justify-between content-center mb-2 text-left w-full text-2xl px-5 lg:px-8 py-4">
				<h1 id="navbar-title" className="h-12 w-64 flex justify-start items-center transform scale-65 origin-left transition-all ease-in-out duration-1000">
					<img src="/images/logo/algrith-logo-dark.png" className="dark:hidden" alt="brand-logo" />
					<img src="/images/logo/algrith-logo-light.png" className="hidden dark:block" alt="brand-logo" />
				</h1>

				<button type="button" ref={ closeMenuRef } id="close-menu" className="flex justify-center rounded-xl items-center bg-transparent focus:bg-transparent hover:bg-transparent border-none outline-none dark:text-dark-mode-octonary text-black">
					<i className="bi text-4xl leading-4 bi-x"></i>
				</button>
			</div>

			<div id="navbar-links" className="flex flex-col lg:flex-row flex-grow flex-shrink-0 w-11/12 lg:w-full p-2 rounded-xl my-4 lg:my-0 mx-auto">
				<Link
				  className="ripple-node transition all ease-in-out duration-400 my-2 mx-auto lg:mx-4 px-0 lg:p-2 hover:border-opacity-100 border-theme-primary border-b-4 border-opacity-0 dark:border-opacity-0 text-left lg:text-center w-full lg:w-auto text-lg dark:text-dark-mode-octonary text-gray-600"
					href="/about">
					About
				</Link>

				<Link
				  className="ripple-node transition all ease-in-out duration-400 my-2 mx-auto lg:mx-4 px-0 lg:p-2 hover:border-opacity-100 border-theme-primary border-b-4 border-opacity-0 dark:border-opacity-0 text-left lg:text-center w-full lg:w-auto text-lg dark:text-dark-mode-octonary text-gray-600"
					href="/how-it-works">
					How It Works
				</Link>
				
				<Link
				  className="ripple-node transition all ease-in-out duration-400 my-2 mx-auto lg:mx-4 px-0 lg:p-2 hover:border-opacity-100 border-theme-primary border-b-4 border-opacity-0 dark:border-opacity-0 text-left lg:text-center w-full lg:w-auto text-lg dark:text-dark-mode-octonary text-gray-600"
					href="/contact-us">
					Contact
				</Link>
				
				{/* <Link href="/auth/login" className="flex items-center justify-between dark:bg-opacity-50 bg-theme-primary rounded lg:rounded-full ripple-node transition all ease-in-out duration-400 my-2 mx-auto lg:mx-4 py-3 px-4 lg:py-2 lg:px-4 hover:border-opacity-100 border-theme-primary border-b-4 border-opacity-0 dark:border-opacity-0 text-left lg:text-center w-full lg:w-auto text-lg text-white">
					Login
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
				</Link> */}
			</div>
			
			<div className="lg:hidden flex justify-between items-center flex-grow-0 flex-shrink relative p-4 w-full dark:bg-dark-mode-secondary bg-gray-200 mt-2">
				<div id="navbar-footer-brand" data-aos="fade-right" className="inline-flex items-center dark:text-gray-400 h-full">
					© Copyright <span className="mx-1 text-theme-primary"> Algrith {new Date().getFullYear()} </span>
				</div>
				<div id="navbar-footer-socials" className="flex justify-center items-center h-full">
					<span data-aos="fade-left" className="flex justify-center mx-1 items-center rounded-xl dark:text-dark-mode-septenary text-gray-600 text-xl h-8 w-8 dark:bg-slate-600 bg-gray-300">
						<i className="fab fa-facebook"></i>
					</span>
					<span data-aos="fade-left" className="flex justify-center mx-1 items-center rounded-xl dark:text-dark-mode-septenary text-gray-600 text-xl h-8 w-8 dark:bg-slate-600 bg-gray-300">
						<i className="fab fa-twitter"></i>
					</span>
					<span data-aos="fade-left" className="flex justify-center mx-1 items-center rounded-xl dark:text-dark-mode-septenary text-gray-600 text-xl h-8 w-8 dark:bg-slate-600 bg-gray-300">
						<i className="fab fa-linkedin"></i>
					</span>
				</div>
			</div>
		</nav>
  );
};

export default Navbar;