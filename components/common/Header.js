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

            <header className="flex sticky top-0 z-20 justify-between items-center bg-white bg-geen-300 py-1 px-4 md:p-4 w-full dark:bg-black">
                
                <div id="brand" className="ml-4 lg:ml-24 transition-all ease-in-out duration-1000">
                    <div className="w-8 mr-4">
                    <img src="./images/logo/algrith.png" alt="brand-logo" />
                </div>
<a href="/">
                        <h1 id="brand-title" className="flex items-center uppercase text-3xl md:text-5xl text-black mx-auto w-full text-center font-medium transition-all ease-in-out duration-1000">
                            Algrith
                        </h1>
                    </a>
                </div>
                
                <div id="hamburger" onClick={this.props.event.open_nav_bar} className="md:hidden flex justify-center items-center text-3xl cursor-pointer p-4 ml-4 mr-1 text-gray-600 transform scale-y-75 transition-all ease-in-out duration-1000">
                    <i className="fa fa-bars"></i>
                </div>

            </header>

        )
    }
}
