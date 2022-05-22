import React from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
    
    constructor() {
        super()        
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    render() {

        return (

            <header id="header" className="flex sticky top-0 z-20 justify-between items-center bg-white bg-geen-300 px-6 md:px-12 xl:px-24 py-1 md:py-6 w-full dark:bg-black">
                
                {/* <div id="brand" className="flex justify-start items-center ml-2 lg:ml-20 transition-all ease-in-out duration-500"></div> */}
                <div id="brand" className="flex justify-start items-center transition-all ease-in-out duration-500">
                    
                    <Link href="/">
                        <a id="brand-title" className="transform origin-left scale-65 lg:scale-100 h-16 w-64 ripple-node flex justify-start items-center align-center uppercase mx-auto text-center transition-all ease-in-out duration-1000">
                            <img src="./images/logo/algrith-brand.jpg" alt="brand-logo" />                            
                        </a>
                    </Link>

                </div>
                
                <div id="hamburger" onClick={this.props.open_nav_bar} className="md:hidden flex justify-center items-center text-3xl cursor-pointer p-4 ml-4 -mr-3 text-gray-600 transform scale-y-75 transition-all ease-in-out duration-1000">
                    <i className="fa fa-bars"></i>
                </div>

            </header>

        )
    }
}
