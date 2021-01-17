import React from 'react'
import Link from 'next/link'

export default class Intro extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="relative flex flex-wrap xl:flex-nowrap justify-around items-center w-full dark:bg-black bg-intro-index bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat">

                <div className="relative w-full bg-gradient-to-b from-white bg-opacity-30">
<div className="uppercase w-full xl:w-2/3 text-green-500 m-0 md:m-4 p-8 lg:p-20">
                    <span className="w-full text-3xl font-bold lg:text-8xl intro-lead"></span> <span className="inline-block mt-4 text-purple-500 text-2xl font-medium lg:text-5xl">We make happy clients</span>
                </div>

                <div className="relative w-full xl:w-1/3 m-0 md:m-4 px-8 pb-16 lg:p-20">                    
                    <div className="relative">
                        <a href="#outline" className="scroll-selector bg-green-400 relative rounded-full ring-4 ring-green-300 text-2xl font-bold uppercase text-white ml-2 mr-4 mt-0 mb-8 md:my-4 px-8 lg:px-16 py-4 lg:py-8 transform focus:scale-65 focus:select-none">
                            <div className="absolute top-0 -left-3 md:-left-1 flex w-8 h-8">
                                <div className="absolute inline-flex bg-yellow-500 w-full h-full animate-ping rounded-full"></div>
                                <div className="relative inline-flex bg-green-400 w-8 h-8 rounded-full px-2 py-2"></div>
                            </div>
                            Get Started                        
                        </a>
                    </div>
                </div>

</div>

            </div>

        )
    }
}
