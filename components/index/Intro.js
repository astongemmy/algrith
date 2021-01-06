import React from 'react'
import Link from 'next/link'

export default class Intro extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="relative flex flex-wrap xl:flex-nowrap justify-around items-center bg-gren-300 w-full dark:bg-black bg-intro bg-left-top bg-contain xl:bg-cover bg-scroll lg:bg-fixed bg-no-repeat">

                <div className="w-full xl:w-2/3 text-green-600 text-yelow-200 m-0 md:m-4 p-8 lg:p-20 text-5xl lg:text-8xl">
                    The best software algorithm solution
                </div>

                <div className="relative w-full xl:w-1/3 m-0 md:m-4 p-8 lg:p-20">                    
                    <div className="relative">
                        <button className="bg-green-500 relative rounded-full ring-4 ring-green-300 text-3xl text-green-200 mx-4 my-8 md:my-4 px-8 lg:px-16 py-4 lg:py-8 focus:outline-none select-none focus:select-none">
                            <div className="absolute top-0 -left-1 flex w-8 h-8">
                                <div className="absolute inline-flex bg-yellow-500 w-full h-full animate-ping rounded-full"></div>
                                <div className="relative inline-flex bg-green-400 w-8 h-8 rounded-full px-2 py-2"></div>
                            </div>
                            Get Started                        
                        </button>
                    </div>
                </div>

            </div>

        )
    }
}
