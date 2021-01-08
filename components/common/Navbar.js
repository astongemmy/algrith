import React, {useEffect} from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        
        return (

            <nav id="nav-menu" className="navlinks transition-all z-50 ease-in-out duration-1000 shadow md:shadow-none bg-white fixed top-0 md:top-4 lg:top-16 -right-full md:right-12 flex flex-col lg:flex-row justify-start md:justify-end items-beteen content-between w-screen md:w-auto h-screen md:h-12 text-gray-600 p-0 lg:p-4 lg:bg-gradient-to-t lg:from-gray-100 lg:via-white lg:rounded-b-full">
                                
                <div className="md:hidden bg-red-300 flex flex-none justify-between content-center m-1 text-left w-full text-2xl">
                    
                    <h1 className="uppercase flex text-black p-2 font-medium">
                        Algrith
                    </h1>

                    <div id="close-menu" onClick={this.props.event.close_nav_bar} className="flex justify-center p-2 text-xl items-center text-black">
                        <i className="fa fa-times"></i>
                    </div>

                </div>

<div className="flex flex-grow-1 flex-wrap lg:flex-nowrap w-full bg-gray-200 p-8 rounded-xl mt-4 mx-auto">
                <Link href="/about">
                    <a className="mt-1 mb-1 ml-8 mr-1 md:m-4 p-4 hover:bg-gray-200 text-left md:text-center w-full md:w-auto text-3xl md:text-xl text-green-500">About</a>
                </Link>
                <Link href="/contact">
                    <a className="mt-1 mb-1 ml-8 mr-1 md:m-4 p-4 hover:bg-gray-200 text-left md:text-center w-full md:w-auto text-3xl md:text-xl text-green-500">Contact</a>
                </Link>
                <Link href="/support">
                    <a className="mt-1 mb-1 ml-8 mr-1 md:m-4 p-4 hover:bg-gray-200 text-left md:text-center w-full md:w-auto text-3xl md:text-xl text-green-500">Support</a>
                </Link>
</div>

<div className="inline-flex flex-none relative p-4 w-full bg-gray-200">
Powered by <span className="ml-1 text-green-600"> Algrith</span>
                    <img src="./images/logo/algrith.png" alt="brand logo" className="logo inline-flex" />
</div>

            </nav>

        )
    }
}
