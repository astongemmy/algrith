import React from 'react'
import Link from 'next/link'

export default class Intro extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="relative w-full dark:bg-black bg-intro-about bg-left-top bg-covr bg-scroll lg:bg-fixed bg-no-repeat">
                
                <div className="w-full rounded-xl shadow-xl m-0 md:m-4 p-8 lg:p-20">
                    <h1 className="relative uppercase text-3xl md:text-7xl text-green-500 p-8 m-0 md:m-4 w-full text-center font-medium">
                        Who we really are!
                    </h1>
                    <p className="w-full text-center text-white text-3xl lg:text-5xl">
                        Algrith is a software company dedicated to delivering elegant, efficient, secure, accessible etc, web applications and websites  for use by clients both in the public and private sector.
                    </p>                    
                    <span className="hidden mt-4 text-center text-black text-3xl font-medium lg:text-3xl">
                        We make happy clients
                    </span>
                </div>

                <a href="#outline" className="scroll-selector cursor-pointer absolute flex justify-center items-center right-12 lg:right-32 -bottom-8 rounded-full bg-green-500 text-white p-8 text-3xl w-20 h-20"><i className="fa fa-arrow-down"></i></a>

            </div>

        )
    }
}
