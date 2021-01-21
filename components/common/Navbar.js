import React from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        
        return (

            <nav id="nav-menu" className="navlinks transition-all z-50 ease-in-out duration-700 shadow md:shadow-none bg-white fixed top-0 md:top-4 lg:top-6 -right-full md:right-12 flex flex-col md:flex-row justify-between md:justify-end md:items-center w-screen md:w-auto h-screen md:h-12 text-gray-600 lg:p-4">
                                
                <div className="md:hidden flex flex-grow-0 flex-shrink justify-between content-center mb-2 text-left w-full text-2xl p-4">
                    
                    <h1 id="navbar-title" className="relative mt-0 h-16 w-64 flex justify-start items-center text-center align-center transform scale-65 origin-left transition-all ease-in-out duration-1000">
                            <img src="./images/logo/algrith-brand.jpg" alt="brand-logo" />
                    </h1>

                    <div id="close-menu" onClick={this.props.close_nav_bar} className="animated flex justify-center h-12 w-12 bg-gray-300 rounded-xl text-xl items-center text-black">
                        <i className="fa fa-times"></i>
                    </div>

                </div>
                
                <div id="navbar-links" className="flex flex-col md:flex-row flex-grow flex-shrink-0 w-11/12 md:w-full p-2 rounded-xl my-4 lg:my-0 mx-auto">
                    <Link href="/">
                        <a className="animated ripple-node transition all ease-in-out duration-700 my-2 mx-auto md:m-4 p-2 hover:border-opacity-100 border-green-400 border-b-4 border-opacity-0 text-left md:text-center w-full md:w-auto text-xl font-bold text-gray-600">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="animated ripple-node transition all ease-in-out duration-700 my-2 mx-auto md:m-4 p-2 hover:border-opacity-100 border-green-400 border-b-4 border-opacity-0 text-left md:text-center w-full md:w-auto text-xl font-bold text-gray-600">About</a>
                    </Link>
                    <Link href="/contact">
                        <a className="animated ripple-node transition all ease-in-out duration-700 my-2 mx-auto md:m-4 p-2 hover:border-opacity-100 border-green-400 border-b-4 border-opacity-0 text-left md:text-center w-full md:w-auto text-xl font-bold text-gray-600">Contact</a>
                    </Link>
                    <Link href="/support">
                        <a className="animated ripple-node transition all ease-in-out duration-700 my-2 mx-auto md:m-4 p-2 hover:border-opacity-100 border-green-400 border-b-4 border-opacity-0 text-left md:text-center w-full md:w-auto text-xl font-bold text-gray-600">Support</a>
                    </Link>

                </div>

                <div className="md:hidden flex justify-between items-center flex-grow-0 flex-shrink relative p-4 w-full bg-gray-200 mt-2">
                    
                    <div id="navbar-footer-brand" className="animated inline-flex items-center h-full">
                        Powered by <span className="mx-1 text-navyblue"> Algrith</span>
                        <img src="./images/logo/algrith.png" alt="brand logo" className="logo inline-flex" />
                    </div>
                    
                    <div id="navbar-footer-socials" className="flex justify-center items-center h-full">
                        <span className="animated flex justify-center mx-1 items-center rounded-xl text-gray-600 text-xl h-8 w-8 bg-gray-300">
                            <i className="fab fa-facebook"></i>
                        </span>
                        <span className="animated flex justify-center mx-1 items-center rounded-xl text-gray-600 text-xl h-8 w-8 bg-gray-300">
                            <i className="fab fa-twitter"></i>
                        </span>
                        <span className="animated flex justify-center mx-1 items-center rounded-xl text-gray-600 text-xl h-8 w-8 bg-gray-300">
                            <i className="fab fa-linkedin"></i>
                        </span>
                    </div>

                </div>

            </nav>

        )
    }
}
