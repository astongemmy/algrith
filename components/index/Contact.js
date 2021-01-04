import React from 'react'
import Link from 'next/link'

export default class Contact extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="py-16 px-4 lg:px-32 w-full dark:bg-black">

                <h1 className="uppercase text-5xl text-red-600 mx-auto w-full text-center font-medium">
                    Contact us
                </h1>

                <div className="flex flex-wrap lg:flex-nowrap justify-around items-start px-16 py-2 lg:py-16 w-full">

                    <div className="relative w-full md:w-2/4 m-0 p-4">

                        <div className="relative flex flex-wrap w-full m-0 p-2 lg:p-12">
                            <div className="w-full lg:w-2/4 p-4">
                                <input type="email" placeholder="email" className="w-full outline-none ring ring-green-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>
                            <div className="w-full lg:w-2/4 p-4">
                                <input type="text" placeholder="name" className="w-full outline-none ring ring-green-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>
                            <div className="w-full lg:w-2/4 p-4">
                                <input type="text" placeholder="phone" className="w-full outline-none ring ring-green-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>
                            <div className="w-full lg:w-2/4 p-4">
                                <input type="text" placeholder="location" className="w-full outline-none ring ring-green-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>
                            <div className="w-full p-4">
                                <textarea placeholder="message" className="w-full outline-none h-32 ring ring-green-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>
                            <button className="w-auto py-3 px-12 ml-4 my-8 text-2xl rounded-xl ring ring-offset-4 ring-green-500 bg-green-500 text-green-100">
                                Send
                            </button>
                        </div>

                    </div>

                    <div className="relative w-full md:w-2/4 m-0 p-4">

                        <div className="relative flex justify-start items-center w-full m-0 p-2 lg:p-12">
                            <img src="./images/backgrounds/contact_us.webp" />
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}