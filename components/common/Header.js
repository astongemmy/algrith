import React, {useEffect} from 'react'
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

            <header className="flex sticky top-0 z-20 justify-between items-center bg-green-300 p-4 w-full dark:bg-black transition-all ease-in-out duration-1000">
                
                {/* <div className="w-16 ml-4 lg:ml-64 md:mt-4 mt-1">
                    <img src="./images/logo/algrith.png" alt="brand-logo" />
                </div> */}
                <div id="brand" className="ml-4 lg:ml-32 md:mt-4 mt-0 transition-all ease-in-out duration-1000">
                    <a href="/">
                        <h1 id="brand-title" className="uppercase hover:bg-green-400 p-4 rounded-full text-5xl text-yellow-100 mx-auto w-full text-center font-medium transition-all ease-in-out duration-1000">
                            Algrith
                        </h1>
                    </a>
                </div>
                
                <div id="hamburger" onClick={this.props.event.open_nav_bar} className="md:hidden flex justify-center items-center text-3xl cursor-pointer p-4 ml-4 mr-4 mt-1 bg-green-500 text-white transition-all ease-in-out duration-1000">
                    <i className="fa fa-bars"></i>
                </div>

            </header>

        )
    }
}
