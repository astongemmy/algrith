import React from 'react'
import Link from 'next/link'

export default class Intro extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="relative w-full h-auto xl:h-126 dark:bg-black bg-intro-index bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat">

                <div className="relative px-4 flex flex-wrap xl:flex-nowrap justify-around xl:justify-start items-center w-full bg-gradient-to-b from-white bg-opacity-30">
                    
                    <div className="relative uppercase w-full xl:w-3/4 text-green-500 m-0 p-8 lg:pr-0 lg:p-20">
                        <span className="w-full text-3xl font-bold lg:text-8xl intro-lead"></span> <span className="inline-block mt-4 text-gray-600 text-2xl font-medium lg:text-5xl">We make happy clients</span>
                    </div>

                    <div className="relative xl:absolute xl:right-2 xl:top-32 w-full xl:w-1/4 m-0 px-8 pb-16 lg:py-20">
                        <div className="relative mx-auto">
                            <a href="#outline" className="scroll-selector bg-green-700 relative rounded-xl text-2xl font-bold uppercase text-white ml-2 mr-4 mt-0 mb-8 md:my-4 px-8 lg:px-16 py-4 lg:py-8 transform hover:scale-65 select-none hover:select-none">
                                <div className="absolute -top-3 -left-3 md:-left-1 flex w-8 h-8">
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
