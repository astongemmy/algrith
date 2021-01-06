import React, {useEffect} from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        
        return (

            <nav id="nav-menu" className="navlinks transition-all z-50 ease-in-out duration-1000 shadow md:shadow-none bg-white flex md:flex fixed top-0 md:top-4 lg:top-16 -right-full md:right-12 flex-wrap md:flex-nowrap justify-start md:justify-end items-start md:items-center content-start w-screen md:w-auto h-screen md:h-12 text-gray-600 p-4 lg:bg-gradient-to-t lg:from-gray-100 lg:via-white lg:rounded-b-full">
                                
                <div className="md:hidden flex justify-between items-center m-1 text-left w-full text-3xl">
                    
                    <div className="flex text-black p-2">
                        Algrith
                    </div>

                    <div id="close-menu" onClick={this.props.event.close_nav_bar} className="flex justify-center p-2 text-xl items-center text-black">
                        <i className="fa fa-times"></i>
                    </div>

                </div>

                <Link href="/about">
                    <a className="m-1 md:m-4 p-4 hover:bg-gray-200 text-left md:text-center w-full md:w-auto text-3xl md:text-xl text-green-500">About</a>
                </Link>
                <Link href="/contact">
                    <a className="m-1 md:m-4 p-4 hover:bg-gray-200 text-left md:text-center w-full md:w-auto text-3xl md:text-xl text-green-500">Contact</a>
                </Link>
                <Link href="/support">
                    <a className="m-1 md:m-4 p-4 hover:bg-gray-200 text-left md:text-center w-full md:w-auto text-3xl md:text-xl text-green-500">Support</a>
                </Link>

            </nav>

        )
    }
}
