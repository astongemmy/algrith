import React from 'react'
import Link from 'next/link'

export default class Intro extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="flex flex-wrap xl:flex-nowrap justify-around items-center bg-green-300 p-16 w-full dark:bg-black">

                <div className="w-full xl:w-2/3 text-yellow-200 m-0 md:m-4 p-4 lg:p-16 text-3xl lg:text-8xl">
                    "The best software algorithm solution"
                </div>

                <div className="relative w-full xl:w-1/3 m-0 md:m-4 p-16">                    
                    <div className="relative">
                        <button className="bg-green-500 relative rounded-full ring-4 ring-green-300 text-3xl text-green-200 m-8 md:m-4 px-16 py-8">
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
