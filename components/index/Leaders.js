import React from 'react'
import Link from 'next/link'

export default class About extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="relative overflow-hidden py-16 px-2 lg:px-32 w-full bg-gray-100 dark:bg-black">
                
                <div className="relative w-3/4 lg:w-auto mb-8 lg:mb-0 mx-auto lg:absolute top-auto lg:-top-72 right-auto lg:-right-80 bg-gray-200 rounded-full overflow-hidden p-0 lg:p-8 transform lg:scale-65 animation-all duration-1000 ease-in-out">
                    <img className="rounded-full" src="./images/illustrations/setup-team.jpeg" />
                </div>

                <h1 className="relative uppercase text-3xl md:text-5xl text-yellow-600 mx-auto w-full text-center font-medium">
                    The company
                </h1>

                <div className="relative flex flex-wrap justify-around items-center px-2 xl:px-64 py-0 lg:py-16 w-full">

                    <div className="relative w-full lg:w-2/4 xl:w-2/4 my-0 mx-4 md:mx-0 p-0 md:p-4">

                        <div className="relative w-full m-4 md:m-0 p-4 lg:p-12">
                        
                            <div className="z-10 uppercase absolute bg-green-500 text-green-100 top-10 left-10 p-4 rounded-xl">
                                Secretary
                            </div>
                            
                            <div className="absolute top-16 left-16 w-20 h-32 border-t-4 border-r-4 border-green-400 rounded-xl"></div>

                            <div className="absolute top-6 left-52 bg-red-400 transform rotate-45 w-4 h-32 border-t-4 border-r-4 border-red-600 rounded-xl"></div>

                            <div className="flex relative mt-28 ml-20 w-72 h-72 rounded-full ring-8 ring-red-200 ring-offset-4 ring-offset-gray-100">
                                <div className="absolute w-full rounded-full h-full"></div>
                                <div className="relative flex justify-center items-center w-72 h-72 rounded-full overflow-hidden">
                                    <img className="relative rounded-full" src="./images/board/secretary.jpg" width={200} height={200} alt="leader_image" />
                                </div>
                            </div>

                            <div className="absolute uppercase bg-red-500 text-red-100 py-2 px-4 left-48 top-4 rounded-xl">
                                Edwin, Leatherman
                            </div>

                        </div>

                    </div>
                    
                    <div className="relative w-full lg:w-2/4 xl:w-2/4 my-0 mx-4 md:mx-0 p-0 md:p-4">

                        <div className="relative w-full m-4 md:m-0 p-4 lg:p-12">

                            <div className="z-10 uppercase absolute bg-green-500 text-green-100 top-10 right-10 p-4 rounded-xl">
                                Co Founder
                            </div>
                            
                            <div className="absolute top-16 right-16 w-20 h-32 border-t-4 border-l-4 border-green-400 rounded-xl"></div>

                            <div className="absolute top-6 right-52 bg-red-400 transform -rotate-45 w-4 h-32 border-t-4 border-r-4 border-red-600 rounded-xl"></div>

                            <div className="flex relative mt-28 ml-auto mr-20 w-72 h-72 rounded-full ring-8 ring-red-200 ring-offset-4 ring-offset-gray-100">
                                <div className="absolute w-full rounded-full h-full"></div>
                                <div className="relative flex justify-center items-center w-72 h-72 rounded-full overflow-hidden">
                                    <img className="relative rounded-full" src="./images/board/cto.jpg" width={200} height={200} alt="leader_image" />
                                </div>
                            </div>

                            <div className="absolute uppercase bg-red-500 text-red-100 py-2 px-4 right-48 top-6 rounded-xl">
                                Ilori, OluJide
                            </div>

                        </div>

                    </div>

                    <div className="relative bg-green-400 w-full lg:w-2/4 xl:w-2/4 my-0 mx-4 md:mx-0 p-0 md:p-4">

                        <div className="relative bg-yellow-200 w-full m-0 p-4 lg:p-12">
                        
                            <div className="z-10 uppercase absolute bg-green-500 text-green-100 top-10 right-2/4 transform translate-x-2/4 p-4 rounded-xl">
                                Founder / CEO
                            </div>
                            
                            <div className="absolute top-16 bg-green-400 left-2/4 transform -translate-x-2/4 w-2 h-48"></div>

                            <div className="absolute top-32 left-2/4 transform -translate-x-2/4 bg-red-400 w-4 h-32 border-t-4 border-r-4 border-red-600 rounded-xl"></div>

                            <div className="flex bg-gray-400 relative mt-48 mx-auto w-52 h-52 rounded-full ring-8 ring-red-200 ring-offset-4 ring-offset-gray-100">
                                <div className="absolute w-full rounded-full h-full"></div>
                                <div className="relative flex justify-center items-center w-full h-full rounded-full overflow-hidden">
                                    <img className="relative rounded-full" src="./images/board/cto.jpg" width={200} height={200} alt="leader_image" />
                                </div>
                            </div>

                            <div className="absolute uppercase bg-red-500 text-red-100 py-2 px-4 left-2/4 transform -translate-x-2/4 top-32 rounded-xl">
                                Akpan, Uwakmfon
                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>

        )
    }
}
