import React from 'react'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="relative bg-gray-100">
			<div className="flex flex-wrap justify-between px-4 md:px-8 lg:px-16 xl:px-24 pb-12">
				<div className="w-full md:w-2/5 lg:w-3/12 pt-4">
					<h1 className="p-4 text-navyblue text-xl font-bold">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline mr-4 text-green-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
						</svg>
						Featured
					</h1>
					<div className="relative px-4 text-xl">
						<details className="my-4 rounded-xl bg-white shadow-lg border-gray-200 cursor-pointer">
							<summary className="flex justify-between items-center p-4 text-black focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
								<span className="ml-4">Data for scientists</span>
								<i className="fa fa-bug mr-4"></i>
							</summary>
							<p className="px-8 pt-2 pb-6 text-gray-600 transition-all ease-in-out duration-700">
								More Content for data scientists
							</p>
						</details>
						<details className="my-4 rounded-xl bg-white shadow-lg border-gray-200 cursor-pointer">
							<summary className="flex justify-between items-center p-4 text-black focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
								<span className="ml-4">Data for Web</span>
								<i className="fa fa-desktop mr-4"></i>
							</summary>
							<p className="px-8 pt-2 pb-6 text-gray-600 transition-all ease-in-out duration-700">
								More Content for data web
							</p>
						</details>
						<details className="my-4 rounded-xl bg-white shadow-lg border-gray-200 cursor-pointer">
							<summary className="flex justify-between items-center p-4 text-black focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
								<span className="ml-4">Data for UI/UX</span>
								<i className="fab fa-uikit mr-4"></i>
							</summary>
							<p className="px-8 pt-2 pb-6 text-gray-600 transition-all ease-in-out duration-700">
								More Content for data UI/UX
							</p>
						</details>
						<details className="my-4 rounded-xl bg-white shadow-lg border-gray-200 cursor-pointer">
							<summary className="flex justify-between items-center p-4 text-black focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
								<span className="ml-4">Data for Interns</span>
								<i className="fa fa-satellite-dish mr-4"></i>
							</summary>
							<p className="px-8 pt-2 pb-6 text-gray-600 transition-all ease-in-out duration-700">
								More Content for data Interns
							</p>
						</details>
					</div>
				</div>
				<div className="flex flex-wrap justify-between w-full md:w-3/5 lg:w-9/12 pt-4 md:pl-4">
					<div className="w-1/2 lg:w-1/4 pt-4">
						<h1 className="p-4 text-navyblue font-bold text-xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline mr-4 text-green-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
							</svg>
							Company
						</h1>
						<div className="relative text-lg">
							<ul className="pl-0">
								<li className="px-4 py-2">
									<Link href="/about">
										<a className="text-gray-600">About Us</a>
									</Link>
								</li>
								<li className="px-4 py-2">
									<Link href="/products">
										<a className="text-gray-600">Products</a>
									</Link>
								</li>
								<li className="px-4 py-2">
									<Link href="/contact-us">
										<a className="text-gray-600">Contact Us</a>
									</Link>
								</li>
								<li className="px-4 py-2">
									<Link href="/">
										<a className="text-gray-600">FAQ</a>
									</Link>
								</li>
								<li className="px-4 py-2">
									<Link href="/how-it-works">
										<a className="text-gray-600">How it Works</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-1/2 lg:w-1/4 pt-4">
						<h1 className="p-4 text-navyblue font-bold text-xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline mr-4 text-green-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
							</svg>
							Products
						</h1>
						<div className="relative text-lg">
							<ul className="pl-0">
								<li className="px-4 py-2">
									<Link href="/products/applications">
										<a className="text-gray-600">Application development</a>
									</Link>
								</li>
								<li className="px-4 py-2">
									<Link href="/products/websites">
										<a className="text-gray-600">Web development</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-1/2 lg:w-1/4 pt-4">
						<h1 className="p-4 text-navyblue font-bold text-xl">						
							<svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline mr-4 text-green-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
							</svg>
							Legal
						</h1>
						<div className="relative text-lg">
							<ul className="pl-0">
								<li className="px-4 py-2">
									<Link href="/privacy-policy">
										<a className="text-gray-600">Privacy Policy</a>
									</Link>
								</li>
								<li className="px-4 py-2">
									<Link href="/terms-of-service">
										<a className="text-gray-600">Terms of Service</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-1/2 lg:w-1/4 pt-4">
						<h1 className="p-4 font-bold text-xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline mr-4 text-green-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
							</svg> Contact Us
						</h1>
						<div className="relative text-xl">
							<div className="relative">
								<div className="px-4">
									<aside className="mb-4">
										<a className="text-gray-600" href="mailto:algrithllc@gmail.com">algrithllc@gmail.com</a>
									</aside>
								</div>
								<div className="text-navyblue mt-4 px-2 flex justify-start items-center">
									<a href="#" data-aos="fade-left" className="flex justify-center mx-1 items-center rounded-xl text-xl h-8 w-8 bg-white shadow-lg">
										<i className="fab fa-facebook"></i>
									</a>
									<a href="#" data-aos="fade-left" className="flex justify-center mx-1 items-center rounded-xl text-xl h-8 w-8 bg-white shadow-lg">
										<i className="fab fa-twitter"></i>
									</a>
									<a href="#" data-aos="fade-left" className="flex justify-center mx-1 items-center rounded-xl text-xl h-8 w-8 bg-white shadow-lg">
										<i className="fab fa-linkedin"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a href="/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mx-0 py-8 text-xl bg-gray-800 text-white">
				© Copyright <span className="ml-1 text-green-400"> Algrith {new Date().getFullYear()} </span>
			</a>
		</footer>
	)
}