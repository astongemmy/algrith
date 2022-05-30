import React from 'react'
import Link from 'next/link'

export default class MissionStatement extends React.Component {  
  constructor() { super() }

  render() {
    return (
      <div className="relative bg-white py-16 md:py-20 px-2 md:px-6 lg:px-14 xl:px-32 w-full dark:bg-black">
        <div className="relative overflow-hidden">
          <div className="md:flex justify-between relative mx-auto px-4 sm:px-6 lg:px-0 sm:static">
            <div className="lg:pr-28 xl:pr-32 px-2 md:px-auto">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Focus on your business. let us handle your online presence and visibillity.
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
              <Link href="/">
                <a className="mt-6 md:mt-8 lg:mt-10 inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-2xl font-medium text-white hover:bg-indigo-700">
                  Order Now 
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {/* <i className="fa fa-shopping-cart"></i> */}
                </a>
              </Link>
            </div>

            <div className="sm:max-w-lg mt-8 md:mt-0 px-2 md:px-auto">
              <div className="rounded-lg overflow-hidden">
                <img src="./images/illustrations/dribbble.gif" alt="" className="w-full h-full object-center object-cover" />
              </div>
            </div>
              {/* <div className="mt-10">
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-7/11 rounded-lg overflow-hidden">
                          <img src="./images/illustrations/dribbble.gif" alt="" className="w-full h-full object-center object-cover"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/">
                  <a className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-2xl font-medium text-white hover:bg-indigo-700">
                    Order Now <i className="fa fa-shopping-cart"></i>
                  </a>
                </Link>
              </div> */}
          </div>
        </div>
      </div>
    )
  }
}