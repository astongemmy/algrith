import React from 'react'
import Link from 'next/link'

export default class About extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="relative overflow-x-hidde py-16 px-2 lg:px-32 w-full bg-green-400 dark:bg-black">
                
                <div className="relative flex justify-center items-center w-3/4 lg:w-auto mb-8 lg:mb-0 mx-auto lg:absolute lg:-top-80 shadow-xl lg:-right-36 rounded-full overflow-hidden p-8 transform lg:scale-65 animation-all duration-1000 ease-in-out">
                    <img className="rounded-full" src="./images/illustrations/setup-team.jpeg" alt="team setup illustration" />
                </div>

                <h1 className="relative uppercase text-3xl py-4 md:text-4xl text-gray-600 mx-auto text-center font-bold">
                    The company
                </h1>

                <div className="relative z-10 flex flex-wrap justify-around items-center mt-12 lg:mt-0 px-2 xl:px-64 py-0 lg:py-16 w-full">

                    <div className="relative w-full shadow-2xl lg:w-80 bg-gradient-to-b from-green-500 via-transparent to-green-200 rounded-xl my-4 mx-8 md:mx-0 px-0 py-4 md:p-4">

                        <div className="relative w-full m-0 rounded-xl">

                            <div className="flex relative mx-auto my-8 w-52 h-52 rounded-full ring-8 ring-green-500 shadow-2xl ring-offset-4 ring-offset-gray-100">
                                <div className="relative flex justify-center items-center w-full h-full rounded-full overflow-hidden">
                                    <img className="relative rounded-full" src="./images/board/cto.png" width={200} height={200} alt="cto image" />
                                </div>
                            </div>

                            <div className="relative my-2 uppercase text-center shadow-2xl bg-green-300 text-green-800 p-4">
                                Co Founder
                            </div>

                            <div className="relative my-2 uppercase text-center shadow-2xl text-green-700 font-bold py-2 px-4 rounded-xl">
                                Ilori, OluJide
                            </div>

                            <div className="flex justify-center items-center">
                                <span className="flex justify-center mx-1 items-center rounded-xl text-green-100 shadow-2xl text-xl h-8 w-8 bg-green-400">
                                    <i className="fab fa-facebook-f"></i>
                                </span>
                                <span className="flex justify-center mx-1 items-center rounded-xl text-green-100 shadow-2xl text-xl h-8 w-8 bg-green-400">
                                    <i className="fab fa-twitter"></i>
                                </span>
                                <span className="flex justify-center mx-1 items-center rounded-xl text-green-100 shadow-2xl text-xl h-8 w-8 bg-green-400">
                                    <i className="fab fa-linkedin"></i>
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="relative shadow-2xl w-full lg:w-80 bg-gradient-to-b from-green-400 via-transparent to-green-500 rounded-xl my-4 mx-8 md:mx-0 px-0 py-4 md:p-4">

                        <div className="relative w-full m-0 rounded-xl">
                                                    
                            <div className="flex relative mx-auto my-8 w-52 h-52 rounded-full shadow-2xl ring-8 ring-green-400 ring-offset-4 ring-offset-gray-100">
                                <div className="relative flex justify-center items-center w-full h-full rounded-full overflow-hidden">
                                    <img className="relative rounded-full" src="./images/board/ceo.png" width={200} height={200} alt="ceo image" />
                                </div>
                            </div>

                            <div className="relative my-2 uppercase text-center shadow-2xl text-green-100 p-4">
                                Founder / CEO
                            </div>

                            <div className="relative my-2 text-center uppercase shadow-2xl text-white font-bold py-2 px-4 rounded-xl">
                                Akpan, Uwakmfon
                            </div>

                            <div className="flex justify-center items-center">
                                <span className="flex justify-center mx-1 items-center rounded-xl text-green-100 shadow-2xl text-xl h-8 w-8 bg-green-400">
                                    <i className="fab fa-facebook-f"></i>
                                </span>
                                <span className="flex justify-center mx-1 items-center rounded-xl text-green-100 shadow-2xl text-xl h-8 w-8 bg-green-400">
                                    <i className="fab fa-twitter"></i>
                                </span>
                                <span className="flex justify-center mx-1 items-center rounded-xl text-green-100 shadow-2xl text-xl h-8 w-8 bg-green-400">
                                    <i className="fab fa-linkedin"></i>
                                </span>
                            </div>

                        </div>

                    </div>
                    
                    <div className="relative shadow-2xl w-full lg:w-80 bg-gradient-to-b from-green-500 via-transparent to-green-200 rounded-xl my-4 mx-8 md:mx-0 px-0 py-4 md:p-4">

                        <div className="relative w-full m-0 rounded-xl">
                        
                            <div className="flex relative mx-auto my-8 w-52 h-52 rounded-full shadow-2xl ring-8 ring-green-200 ring-offset-4 ring-offset-gray-100">
                                <div className="relative flex justify-center items-center w-full h-full rounded-full overflow-hidden">
                                    <img className="relative rounded-full" src="./images/board/secretary.jpg" width={200} height={200} alt="secretary image" />
                                </div>
                            </div>

                            <div className="relative my-2 uppercase text-center shadow-2xl bg-green-300 text-green-800 p-4">
                                Secretary
                            </div>
                            
                            <div className="relative my-2 uppercase text-center shadow-2xl text-green-700 font-bold py-2 px-4 rounded-xl">
                                Edwin, Leatherman
                            </div>

                            <div className="flex justify-center items-center">
                                <span className="flex justify-center mx-1 items-center rounded-xl text-green-100 shadow-2xl text-xl h-8 w-8 bg-green-400">
                                    <i className="fab fa-facebook-f"></i>
                                </span>
                                <span className="flex justify-center mx-1 items-center rounded-xl text-green-100 shadow-2xl text-xl h-8 w-8 bg-green-400">
                                    <i className="fab fa-twitter"></i>
                                </span>
                                <span className="flex justify-center mx-1 items-center rounded-xl text-green-100 shadow-2xl text-xl h-8 w-8 bg-green-400">
                                    <i className="fab fa-linkedin"></i>
                                </span>
                            </div>

                        </div>

                    </div>                 
                    
                </div>

            </div>

        )
    }
}


{/* <div className="relative overflow-x-hidde py-16 px-2 lg:px-32 w-full bg-gray-100 dark:bg-black">
                
                <div className="relative flex justify-center items-center w-3/4 lg:w-auto mb-8 lg:mb-0 mx-auto lg:absolute lg:-top-80 shadow-xl lg:-right-36 rounded-full overflow-hidden lg:p-8 transform lg:scale-65 animation-all duration-1000 ease-in-out">
                    <img className="rounded-full" src="./images/illustrations/setup-team.jpeg" alt="team setup illustration" />
                </div>

                <h1 className="relative uppercase text-3xl md:text-5xl text-yellow-600 mx-auto w-full text-center font-medium">
                    The company
                </h1>

                <div className="relative flex flex-wrap justify-around items-center mt-12 lg:mt-0 px-2 xl:px-64 py-0 lg:py-16 w-full">

                    <div className="relative w-full lg:w-2/4 xl:w-2/4 my-0 mx-4 md:mx-0 p-0 md:p-4">

                        <div className="relative w-full m-0 p-4 lg:p-12">
                        
                            <div className="z-10 uppercase absolute bg-green-500 text-white top-10 right-2/4 transform translate-x-2/4 p-4 rounded-xl">
                                Founder / CEO
                            </div>
                            
                            <div className="absolute top-16 bg-green-400 left-2/4 transform -translate-x-2/4 w-2 h-48"></div>

                            <div className="absolute top-32 left-2/4 transform -translate-x-2/4 bg-red-400 w-4 h-32 border-t-4 border-r-4 border-red-600 rounded-xl"></div>

                            <div className="flex bg-gray-400 relative mt-48 mx-auto w-52 h-52 rounded-full ring-8 ring-gray-200 ring-offset-4 ring-offset-gray-100">
                                <div className="absolute w-full rounded-full h-full"></div>
                                <div className="relative flex justify-center items-center w-full h-full rounded-full overflow-hidden">
                                    <img className="relative rounded-full" src="./images/board/ceo.png" width={200} height={200} alt="ceo image" />
                                </div>
                            </div>

                            <div className="absolute uppercase bg-red-500 text-white py-2 px-4 left-2/4 transform -translate-x-2/4 top-32 rounded-xl">
                                Akpan, Uwakmfon
                            </div>

                        </div>

                    </div>
                    
                    <div className="relative w-full lg:w-2/4 xl:w-2/4 my-0 mx-4 md:mx-0 p-0 md:p-4">

                        <div className="relative w-full m-0 p-4 lg:p-12">

                            <div className="z-10 uppercase absolute bg-green-500 text-white top-10 right-10 p-4 rounded-xl">
                                Co Founder
                            </div>
                            
                            <div className="absolute top-16 right-16 w-20 h-32 border-t-4 border-l-4 border-green-400 rounded-tr-xl"></div>

                            <div className="absolute top-4 right-52 bg-red-400 transform -rotate-45 w-4 h-64 border-t-4 border-r-4 border-red-600 rounded-xl"></div>

                            <div className="flex relative mt-28 ml-auto mr-20 w-52 h-52 rounded-full ring-8 ring-gray-200 ring-offset-4 ring-offset-gray-100">
                                <div className="absolute w-full rounded-full h-full"></div>
                                <div className="relative flex justify-center items-center w-full h-full rounded-full overflow-hidden">
                                    <img className="relative rounded-full" src="./images/board/cto.png" width={200} height={200} alt="cto image" />
                                </div>
                            </div>

                            <div className="absolute uppercase bg-red-500 text-white py-2 px-4 right-48 top-6 rounded-xl">
                                Ilori, OluJide
                            </div>

                        </div>

                    </div>

                    <div className="relative w-full lg:w-2/4 xl:w-2/4 my-0 mx-4 md:mx-0 p-0 md:p-4">

                        <div className="relative w-full m-0 p-4 lg:p-12">
                        
                            <div className="z-10 uppercase absolute bg-green-500 text-white top-10 left-10 p-4 rounded-xl">
                                Secretary
                            </div>
                            
                            <div className="absolute top-16 left-16 w-20 h-32 border-t-4 border-r-4 border-green-400 rounded-tr-xl"></div>

                            <div className="absolute top-4 left-52 bg-red-400 transform rotate-45 w-4 h-64 border-t-4 border-r-4 border-red-600 rounded-xl"></div>

                            <div className="flex relative mt-28 ml-20 w-52 h-52 rounded-full ring-8 ring-gray-200 ring-offset-4 ring-offset-gray-100">
                                <div className="absolute w-full rounded-full h-full"></div>
                                <div className="relative flex justify-center items-center w-full h-full rounded-full overflow-hidden">
                                    <img className="relative rounded-full" src="./images/board/secretary.jpg" width={200} height={200} alt="secretary image" />
                                </div>
                            </div>

                            <div className="absolute uppercase bg-red-500 text-white py-2 px-4 left-48 top-6 rounded-xl">
                                Edwin, Leatherman
                            </div>

                        </div>

                    </div>                 
                    
                </div>

            </div> */}
