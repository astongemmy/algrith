import Link from 'next/link';
import React from 'react';

const Header = ({ openMenuRef }) => {
	return (
    <header id="header" className="flex sticky top-0 z-20 justify-between items-center bg-white px-6 md:px-12 lg:px-16 xl:px-28 py-1 w-full dark:bg-dark-mode-primary">
			<div id="brand" className="flex justify-start items-center transition-all ease-in-out duration-500 lg:ml-2 xl:ml-0">
				<Link
          className="transform origin-left scale-65 h-16 w-64 ripple-node flex justify-start items-center align-center uppercase mx-auto text-center transition-all ease-in-out duration-1000"
          id="brand-title"
          href="/">
            <img src="/images/logo/algrith-logo-light.png" className="hidden dark:block" alt="algrith_logo" />
            <img src="/images/logo/algrith-logo-dark.png" className="dark:hidden" alt="algrith_logo" />
        </Link>
			</div>

			<button type="button" ref={ openMenuRef } className="lg:hidden flex justify-center items-center text-3xl p-4 -mr-5 text-gray-600 dark:text-theme-primary bg:transparent outline-none focus:outline-none border-none transform scale-y-75 transition-all ease-in-out duration-1000">
				<i className="bi bi-list text-4xl leading-3"></i>
			</button>
		</header>
  );
};

export default Header;