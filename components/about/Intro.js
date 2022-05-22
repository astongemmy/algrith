import React from 'react'
import Link from 'next/link'

export default class Intro extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div id="intro-about" className="relative w-full dark:bg-black bg-intro-about bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat">
                
                <div className="w-full bg-gradient-to-b from-white pt-0 lg:pt-12 pb-12 lg:pb-20 px-8 md:px-12 lg:px-18 xl:px-24">
                    <h1 data-aos="fade-down" className="intro-lead relative uppercase text-3xl md:text-5xl lg:text-8xl text-green-500 py-8 m-0 w-full text-left font-bold"></h1>
                    <p data-aos="fade-up" className="w-full text-left text-gray-600 text-2xl lg:text-5xl">
                        Algrith is a software company dedicated to delivering elegant, 
                        efficient, secure, accessible etc, web applications and websites  
                        for use by clients both in the public and private sector.
                    </p>                    
                    <aside data-aos="fade-right" className="mt-4 text-navyblue text-xl font-bold lg:text-3xl">
                        We make happy clients
                    </aside>
                </div>

                <span href="#outline" className="scroll-selector cursor-pointer absolute flex justify-center items-center right-8 md:right-12 lg:right-32 -bottom-8 rounded-full bg-green-400 text-white p-8 text-3xl w-16 h-16 md:w-20 md:h-20">
                    <i className="fa fa-arrow-down"></i>
                </span>

            </div>

        )
    }
}
