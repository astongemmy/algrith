import React from 'react'
import Link from 'next/link'

export default class About extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="py-16 px-2 lg:px-32 w-full bg-gray-100 dark:bg-black">

                <h1 className="uppercase text-3xl md:text-5xl text-yellow-600 mx-auto w-full text-center font-medium">
                    The company
                </h1>

                <div className="flex flex-wrap justify-around items-center px-2 xl:px-64 py-0 lg:py-16 w-full">

                    <div className="relative w-full lg:w-2/4 xl:w-2/4 my-0 mx-4 md:mx-0 p-0 md:p-4">

                        <div className="relative w-full m-4 md:m-0 p-4 lg:p-12">
                        
                            <div className="z-10 uppercase absolute bg-green-500 text-green-100 top-10 left-10 p-4 rounded-xl">
                                Secretary
                            </div>
                            
                            <div className="absolute top-16 left-16 w-20 h-32 border-t-4 border-r-4 border-green-400 rounded-xl"></div>

                            <div className="absolute top-12 left-52 bg-red-400 transform rotate-45 w-4 h-32 border-t-4 border-r-4 border-red-600 rounded-xl"></div>

                            <div className="flex relative mt-28 ml-20 w-32 h-32 rounded-full ring-8 ring-red-600 ring-offset-4 ring-offset-green-500">
                                <div className="absolute w-full rounded-full h-full bg-red-500 opacity-75 animate-ping"></div>
                                <img className="relative" src="./images/board/secretary.png" width={200} height={200} alt="leader_image" />
                            </div>

                            <div className="absolute uppercase bg-red-500 text-red-100 py-2 px-4 left-48 top-12 rounded-xl">
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

                            <div className="absolute top-12 right-52 bg-red-400 transform -rotate-45 w-4 h-32 border-t-4 border-r-4 border-red-600 rounded-xl"></div>

                            <div className="flex relative mt-28 ml-auto mr-20 w-32 h-32 rounded-full ring-8 ring-red-600 ring-offset-4 ring-offset-green-500">
                                <div className="absolute w-full rounded-full h-full bg-red-500 opacity-75 animate-ping"></div>
                                <img className="relative" src="./images/board/cto.png" width={200} height={200} alt="leader_image" />
                            </div>

                            <div className="absolute uppercase bg-red-500 text-red-100 py-2 px-4 right-48 top-12 rounded-xl">
                                Ilori, OluJide
                            </div>

                        </div>

                    </div>

                    <div className="relative w-full lg:w-2/4 xl:w-2/4 my-0 mx-4 md:mx-0 p-0 md:p-4">

                        <div className="relative w-full m-4 md:m-0 p-4 lg:p-12">
                        
                            <div className="z-10 uppercase absolute bg-green-500 text-green-100 top-10 right-2/4 transform translate-x-2/4 p-4 rounded-xl">
                                Founder / CEO
                            </div>
                            
                            <div className="absolute top-16 bg-green-400 left-2/4 transform -translate-x-2/4 w-2 h-48"></div>

                            <div className="absolute top-32 left-2/4 transform -translate-x-2/4 bg-red-400 w-4 h-32 border-t-4 border-r-4 border-red-600 rounded-xl"></div>

                            <div className="flex relative mt-48 mx-auto w-32 h-32 rounded-full ring-8 ring-red-600 ring-offset-4 ring-offset-green-500">
                                <div className="absolute w-full rounded-full h-full bg-red-500 opacity-75 animate-ping"></div>
                                <img className="relative" src="./images/board/ceo.png" width={200} height={200} alt="leader_image" />
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

// <div className="flex flex-wrap bg-gray-200 md:flex-nowrap justify-around items-center p-16 w-full dark:bg-black">

// <div className="relative w-full lg:w-2/4 xl:w-1/3 m-4 md:m-0 p-4">

//     <div className="relative bg-red-200 ring ring-red-400 rounded-xl w-full m-4 md:m-0 p-12">
    
//         <div className="z-10 absolute bg-yellow-700 text-yellow-200 top-10 left-10 p-4 rounded-xl ring-purple-300">
//             CEO
//         </div>
        
//         <div className="absolute top-16 left-16 w-20 h-20 border-t-4 border-r-4 rounded-xl"></div>
//         {/* <div className="absolute top-20 left-28 transform rotate-45 w-20 h-4 bg-blue-300"></div> */}

//         <div className="flex relative mt-16 ml-20 w-24 h-24 rounded-full ring ring-red-700 ring-offset-4 ring-offset-red-400">
//             <div className="absolute w-full rounded-full h-full bg-blue-500 opacity-75 animat-ping"></div>
//             <img className="z-10" src="./images/logo/algrith.png" width={200} height={200} alt="leader_image" />
//         </div>

//         <div className="absolute bg-red-500 text-red-100 py-2 px-4 left-40 top-12 rounded-xl">
//             Akpan, Uwakmfon
//         </div>

//     </div>

// </div>

// </div>
