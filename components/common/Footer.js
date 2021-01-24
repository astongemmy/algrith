import React from 'react'
import Link from 'next/link'

export default class Footer extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (

            <footer className="relative bg-gray-100">
                
                <div className="flex flex-col lg:flex-row justify-between mx-8 lg:mx-56">
                        
                    <div className="w-full lg:w-1/3 pt-4">

                        <h1 className="p-4 m-4 text-navyblue uppercase font-bold">Featured</h1>
                        
                        <div className="relative mx-4">
                                
                            <details className="my-4 mx-4 rounded-xl border-gray-200 border-2 border-solid cursor-pointer">
                                <summary className="flex justify-start items-center p-4 text-gray-800 focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
                                    <span className="ml-4">Data for scientists</span>
                                </summary>
                                <p className="px-4 py-2 text-gray-600 transition-all ease-in-out duration-700">
                                    More Content for data scientists
                                </p>
                            </details>

                            <details className="my-4 mx-4 rounded-xl border-gray-200 border-2 border-solid cursor-pointer">
                                <summary className="flex justify-start items-center p-4 text-gray-800 focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
                                    <span className="ml-4">Data for Web</span>
                                </summary>
                                <p className="px-4 py-2 text-gray-600 transition-all ease-in-out duration-700">
                                    More Content for data web
                                </p>
                            </details>

                            <details className="my-4 mx-4 rounded-xl border-gray-200 border-2 border-solid cursor-pointer">
                                <summary className="flex justify-start items-center p-4 text-gray-800 focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
                                    <span className="ml-4">Data for UI/UX</span>
                                </summary>
                                <p className="px-4 py-2 text-gray-600 transition-all ease-in-out duration-700">
                                    More Content for data UI/UX
                                </p>
                            </details>

                            <details className="my-4 mx-4 rounded-xl border-gray-200 border-2 border-solid cursor-pointer">
                                <summary className="flex justify-start items-center p-4 text-gray-800 focus:outline-none hover:outline-none outline-none transition-all ease-in-out duration-700">
                                    <span className="ml-4">Data for Interns</span>
                                </summary>
                                <p className="px-4 py-2 text-gray-600 transition-all ease-in-out duration-700">
                                    More Content for data Interns
                                </p>
                            </details>

                        </div>

                    </div>

                    <div className="w-full lg:w-1/3 pt-4">

                        <h1 className="p-4 m-4 text-navyblue uppercase font-bold">Sitemap</h1>

                        <div className="relative mx-4">                       

                            <div className="flex justify-between flex-wrap">
                                <Link href="/">
                                    <a className="w-2/4 lg:w-full p-4 text-gray-600">Home</a>
                                </Link>
                                <Link href="/about">
                                    <a className="w-2/4 lg:w-full p-4 text-gray-600">About</a>
                                </Link>
                                <Link href="/">
                                    <a className="w-2/4 lg:w-full p-4 text-gray-600">Contact Us</a>
                                </Link>
                                <Link href="/">
                                    <a className="w-2/4 lg:w-full p-4 text-gray-600">Support Us</a>
                                </Link>
                                <Link href="/">
                                    <a className="w-2/4 lg:w-full p-4 text-gray-600">FAQ</a>
                                </Link>
                            </div>
                            
                        </div>

                    </div>

                    <div className="w-full lg:w-1/3 pt-4">

                        <h1 className="p-4 m-4 text-navyblue uppercase font-bold">Meet Us</h1>

                        <div className="relative mx-4">                       

                            <div className="relative">
                                <div className="px-4">
                                    <address className="font-bold">
                                        <span className="inline-flex text-lg justify-center items-center w-10 h-10 bg-gray-200 mr-4 rounded-full text-gray-700">
                                            <i className="fa fa-home"></i>
                                        </span>
                                        39 Algrith Avenue
                                    </address>
                                    <aside className="my-4">
                                        <span className="inline-flex text-lg justify-center items-center w-10 h-10 bg-gray-200 mr-4 rounded-full text-gray-700">
                                            <i className="fa fa-map-marker-alt"></i>
                                        </span>
                                        Uyo, Nigeria.
                                    </aside>
                                    <aside className="my-4">
                                        <span className="inline-flex text-lg justify-center items-center w-10 h-10 bg-gray-200 mr-4 rounded-full text-gray-700">
                                            <i className="fa fa-phone-alt"></i>
                                        </span>
                                        <a className="mr-2 text-sm" href="tel:+2348103561805">+2348103561805</a>
                                        <a className="mr-0 text-sm" href="tel:+2348104848901">+2348104848901</a>
                                    </aside>
                                    <aside className="my-4">
                                        <span className="inline-flex text-lg justify-center items-center w-10 h-10 bg-gray-200 mr-4 rounded-full text-gray-700">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                        <a href="mailto:algrithLLC@gmail.com">algrithLLC@gmail.com</a>
                                    </aside>
                                </div>

                                <div className="px-4 flex justify-start items-center">
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
                            
                        </div>

                    </div>

                </div>

                <a href="/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mx-6 py-8 text-xl">
                    Powered by <span className="ml-1 text-navyblue"> Algrith</span>
                    <img src="./images/logo/algrith.png" alt="Algrith Logo" className="logo" />
                </a>
                
            </footer>
            
        )
    }
    
}
