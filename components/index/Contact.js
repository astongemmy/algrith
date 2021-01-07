import React from 'react'
import Link from 'next/link'

export default class Contact extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        return (

            <div className="relative pt-16 pb-0 px-0 lg:px-32 w-full dark:bg-black">

<div className="relative w-3/4 lg:w-auto mb-8 lg:mb-0 mx-auto lg:absolute top-auto lg:-top-56 rounded-full overflow-hidden p-0 lg:p-8 left-auto lg:-left-0 transform lg:scale-65 animation-all duration-1000 ease-in-out">
                    <img className="rounded-full" src="./images/illustrations/contact-us.png" alt="contact us illustration image" />
                </div>

                <h1 className="relative uppercase text-3xl md:text-5xl text-red-600 mx-auto w-full text-center font-medium">
                    Contact us
                </h1>

                <div className="relative flex flex-wrap lg:flex-nowrap justify-around items-start p-0 md:p-16 w-full">

                    <div className="relative w-full md:w-2/4 m-0 p-4">

                        <form method="post" className="relative flex flex-wrap w-full m-0 py-2 px-8 lg:p-12">
                            <div className="w-full lg:w-2/4 p-4">
<label className="text-gray-600 p-2" for="contact-us-email">Email</label>
                                <input type="email" placeholder="Email" id="contact-us-email" className="w-full outline-none ring ring-gray-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>
                            <div className="w-full lg:w-2/4 p-4">
<label className="text-gray-600 p-2" for="contact-us-name">Full Name</label>
                                <input type="text" placeholder="Name" id="contact-us-name" className="w-full outline-none ring ring-gray-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>
                            <div className="w-full lg:w-2/4 p-4">
<label className="text-gray-600 p-2" for="contact-us-phone">Phone</label>
                                <input type="text" placeholder="Phone" id="contact-us-phone" className="w-full outline-none ring ring-gray-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>
                            <div className="w-full lg:w-2/4 p-4">
<label className="text-gray-600 p-2" for="contact-us-location">Location</label>
                                <input type="text" placeholder="Location" id="contact-us-location" className="w-full outline-none ring ring-gray-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>
                            <div className="w-full p-4">
<label className="text-gray-600 p-2" for="contact-us-message">Message</label>
                                <textarea placeholder="Write message..." id="contact-us-message" className="w-full outline-none h-32 ring ring-gray-300 rounded p-4 my-4 mx-auto text-xl" />
                            </div>
                            <button className="w-auto py-3 px-12 ml-4 my-8 text-2xl rounded-xl ring ring-offset-2 ring-green-500 bg-green-500 text-green-100">
                                Send
                            </button>
                        </form>

                    </div>

                    <div className="relative w-full md:w-2/4 m-0 p-0 md:p-4">

                        <div className="relative overflow-hidden flex justify-center lg:justify-start items-center w-full m-0 p-0 md:p-2 lg:p-12">
                            <img src="./images/illustrations/man-on-laptop.png" alt="contact us section image" />
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}
