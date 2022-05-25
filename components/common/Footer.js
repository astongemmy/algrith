import React from 'react'
import Link from 'next/link'

export default class Footer extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (

            <footer className="relative bg-gray-100">
                
                <div className="flex flex-col md:flex-row justify-between mx-0 md:mx-4 lg:mx-12 xl:mx-32 pb-12">
                        
                    <div className="w-full md:w-1/3 pt-4">

                        <h1 className="p-4 m-4 text-navyblue uppercase text-xl font-bold">
                            <i className="far fa-heart text-green-300 mr-4"></i> Featured
                        </h1>
                        
                        <div className="relative mx-4 text-xl">
                                
                            <details className="my-4 mx-4 rounded-xl bg-white shadow-lg border-gray-200 cursor-pointer">
                                <summary className="flex justify-between items-center p-4 text-black focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
                                    <span className="ml-4">Data for scientists</span>
                                    <i className="fa fa-bug mr-4"></i>
                                </summary>
                                <p className="px-8 pt-2 pb-6 text-gray-600 transition-all ease-in-out duration-700">
                                    More Content for data scientists
                                </p>
                            </details>

                            <details className="my-4 mx-4 rounded-xl bg-white shadow-lg border-gray-200 cursor-pointer">
                                <summary className="flex justify-between items-center p-4 text-black focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
                                    <span className="ml-4">Data for Web</span>
                                    <i className="fa fa-desktop mr-4"></i>
                                </summary>
                                <p className="px-8 pt-2 pb-6 text-gray-600 transition-all ease-in-out duration-700">
                                    More Content for data web
                                </p>
                            </details>

                            <details className="my-4 mx-4 rounded-xl bg-white shadow-lg border-gray-200 cursor-pointer">
                                <summary className="flex justify-between items-center p-4 text-black focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
                                    <span className="ml-4">Data for UI/UX</span>
                                    <i className="fab fa-uikit mr-4"></i>
                                </summary>
                                <p className="px-8 pt-2 pb-6 text-gray-600 transition-all ease-in-out duration-700">
                                    More Content for data UI/UX
                                </p>
                            </details>

                            <details className="my-4 mx-4 rounded-xl bg-white shadow-lg border-gray-200 cursor-pointer">
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

                    <div className="w-full md:w-1/3 pt-4">

                        <h1 className="p-4 m-4 text-navyblue uppercase font-bold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 inline text-green-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Links
                        </h1>

                        <div className="relative mx-4 text-xl">

                            <ul className="pl-0">
                                <li className="p-4">
                                    <Link href="/">
                                        <a className="text-gray-600">Home</a>
                                    </Link>
                                </li>
                                <li className="p-4">
                                    <Link href="/about">
                                        <a className="text-gray-600">About</a>
                                    </Link>
                                </li>
                                <li className="p-4">
                                    <Link href="/contact-us">
                                        <a className="text-gray-600">Contact Us</a>
                                    </Link>
                                </li>
                                <li className="p-4">
                                    <Link href="/">
                                        <a className="text-gray-600">Support Us</a>
                                    </Link>
                                </li>
                                <li className="p-4">
                                    <Link href="/">
                                        <a className="text-gray-600">FAQ</a>
                                    </Link>
                                </li>
                            </ul>
                            
                        </div>

                    </div>

                    <div className="w-full md:w-1/3 pt-4">

                        <h1 className="p-4 m-4 text-navyblue uppercase font-bold text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 inline text-green-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg> Contact Us
                        </h1>

                        <div className="relative mx-4 text-xl">                       

                            <div className="relative">
                                <div className="px-4">
                                    {/* <address className="font-bold">
                                        <span className="inline-flex text-lg justify-center items-center w-10 h-10 bg-gray-200 mr-4 rounded-full text-gray-700">
                                            <i className="fa fa-home"></i>
                                        </span>
                                        39 Algrith Avenue
                                    </address> */}
                                    {/* <aside className="my-4">
                                        <span className="inline-flex text-lg justify-center items-center w-10 h-10 bg-gray-200 mr-4 rounded-full text-gray-700">
                                            <i className="fa fa-map-marker-alt"></i>
                                        </span>
                                        Uyo, Nigeria.
                                    </aside> */}
                                    <aside className="my-4">
                                        {/* <span className="inline-flex text-lg justify-center items-center w-8 h-8 bg-white mr-4 rounded-xl shadow-lg">
                                            <i className="fa fa-phone-alt"></i>
                                        </span> */}
                                        <a className="mr-2 text-lg" href="tel:+2348103561805">+2348103561805</a>
                                        <a className="mr-0 text-lg" href="tel:+2348104848901">+2348104848901</a>
                                    </aside>
                                    <aside className="my-4">
                                        {/* <span className="inline-flex text-lg justify-center items-center w-8 h-8 bg-white mr-4 rounded-xl shadow-lg">
                                            <i className="fa fa-envelope"></i>
                                        </span> */}
                                        <a href="mailto:algrithllc@gmail.com">algrithllc@gmail.com</a>
                                    </aside>
                                </div>

                                <div className="mt-8 px-4 flex justify-start items-center">
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

                <a href="/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mx-0 py-8 text-xl bg-gray-800 text-white">
                    © Copyright <span className="ml-1 text-green-400"> Algrith { new Date().getFullYear() } </span>
                    {/* <img src="./images/logo/algrith.png" alt="Algrith Logo" className="logo" /> */}
                </a>
                
            </footer>
            
        )
    }
    
}
