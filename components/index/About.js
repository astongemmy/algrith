import React from 'react'
import Link from 'next/link'

export default class About extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="relative py-16 px-1 lg:px-32 w-full dark:bg-black">

                <div className="relative w-3/4 lg:w-auto mb-8 lg:mb-0 mx-auto lg:absolute lg:-top-28 lg:-left-28 rounded-full overflow-hidden p-0 lg:p-8 transform lg:scale-65 animation-all duration-1000 ease-in-out">
                    <img className="rounded-full" src="./images/illustrations/tam.png" alt="about us illustration image" />
                </div>

                <h1 className="relative uppercase text-3xl md:text-5xl text-green-600 mx-auto w-full text-center font-medium">
                    Why choose us
                </h1>

                <div className="relative flex flex-wrap xl:flex-nowrap justify-start xl:justify-between items-center bg-grey-900 py-4 lg:py-16 px-2 lg:px-32 w-full dark:bg-black">

                    <div className="w-full lg:w-2/4 xl:w-1/3 m-4 md:m-0 p-4">
                        <div className="w-full p-8 lg:p-16 bg-gray-100 text-gray-600 text-lg md:text-2xl rounded-xl text-center shadow">
                            <h2 className="uppercase text-xl md:text-2xl text-black font-semibold mb-4">
                                Competence
                            </h2>
                            <span className="flex justify-center items-center my-2 mx-auto p-1 text-5xl text-green-300 bg-green-100 w-20 h-20 rounded-full">
                                <i className="fa fa-handshake"></i>
                            </span>
                            lorem ipsum lvmesn  fdreajs fagsre ghate
                        </div>
                    </div>

                    <div className="w-full lg:w-2/4 xl:w-1/3 m-4 md:m-0 p-4">
                        <div className="w-full p-8 lg:p-16 bg-gray-100 text-gray-600 text-lg md:text-2xl rounded-xl text-center shadow">
                            <h2 className="uppercase text-xl md:text-2xl text-black font-semibold mb-4">
                                Fast
                            </h2>
                            <span className="flex justify-center items-center my-2 mx-auto p-1 text-5xl text-green-300 bg-green-100 w-20 h-20 rounded-full">
                                <i className="fa fa-plane"></i>
                            </span>
                            lorem ipsum lvmesn  fdreajs fagsre ghate
                        </div>
                    </div>

                    <div className="w-full lg:w-2/4 xl:w-1/3 m-4 md:m-0 p-4">
                        <div className="w-full p-8 lg:p-16 bg-gray-100 text-gray-600 text-lg md:text-2xl rounded-xl text-center shadow">
                            <h2 className="uppercase text-xl md:text-2xl text-black font-semibold mb-4">
                                Trusted
                            </h2>
                            <span className="flex justify-center items-center my-2 mx-auto p-1 text-5xl text-green-300 bg-green-100 w-20 h-20 rounded-full">
                                <i className="fa fa-shield-alt"></i>
                            </span>
                            lorem ipsum lvmesn  fdreajs fagsre ghate
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}
