import React from 'react'
import Link from 'next/link'

export default class Intro extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="relative w-full dark:bg-black bg-intro-about bg-left-top bg-cover bg-scroll lg:bg-fixed bg-no-repeat">
                
                <div className="w-full bg-gradient-to-b from-black bg-opacity-30 m-0 md:m-4 p-8 lg:p-20">
                    <h1 className="relative uppercase text-3xl md:text-7xl text-white py-8 m-0 md:m-4 w-full text-left font-bold">
                        Who we really are!
                    </h1>
                    <p className="w-full text-left text-white text-2xl lg:text-5xl">
                        Algrith is a software company dedicated to delivering elegant, efficient, secure, accessible etc, web applications and websites  for use by clients both in the public and private sector.
                    </p>                    
                    <span className="hidden mt-4 text-center text-black text-3xl font-medium lg:text-3xl">
                        We make happy clients
                    </span>
                </div>

                <a href="#outline" className="scroll-selector cursor-pointer absolute flex justify-center items-center right-12 lg:right-32 -bottom-8 rounded-full bg-green-400 text-white p-8 text-3xl w-20 h-20"><i className="fa fa-arrow-down"></i></a>

            </div>

        )
    }
}
