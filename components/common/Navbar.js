import React, {useEffect} from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        
        return (

            <nav id="nav-menu" className="navlinks transition-all z-50 ease-in-out duration-1000 shadow md:shadow-none bg-green-500 md:bg-transparent flex md:flex fixed top-0 md:top-4 -right-full md:right-8 flex-wrap md:flex-nowrap justify-start md:justify-end items-start md:items-center content-start w-auto h-screen md:h-16 text-white m-0 md:m-4 p-4">
                                
                <div className="md:hidden flex justify-between items-center m-1 text-left w-full text-xl">
                    
                    <div className="flex text-white">
                        Menu
                    </div>

                    <div id="close-menu" onClick={this.props.event.close_nav_bar} className="flex justify-center bg-red-300 rounded-full text-3xl items-center w-16 h-16 text-white">
                        <i className="fa fa-times"></i>
                    </div>

                </div>

                <Link href="/about">
                    <a className="m-1 md:m-4 p-4 hover:bg-green-400 text-left md:text-center w-full md:w-auto text-xl text-white">About</a>
                </Link>
                <Link href="/contact">
                    <a className="m-1 md:m-4 p-4 hover:bg-green-400 text-left md:text-center w-full md:w-auto text-xl text-white">Contact</a>
                </Link>
                <Link href="/support">
                    <a className="m-1 md:m-4 p-4 hover:bg-green-400 text-left md:text-center w-full md:w-auto text-xl text-white">Support</a>
                </Link>

            </nav>

        )
    }
}
