import React from 'react'
import Link from 'next/link'

export default class MissionStatement extends React.Component {  
  constructor() { super() }

  render() {
    return (
      <div className="relative bg-white py-32 px-1 xl:px-32 w-full dark:bg-black">
        <div className="relative overflow-hidden">          
          <div className="relative mx-auto px-4 sm:px-6 lg:px-0 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Focus on your business. let us handle your online presence and visibillity.
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}