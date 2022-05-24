import React from 'react'
import Link from 'next/link'

export default class GetStarted extends React.Component {  
  constructor() { super() }
  render() {
    return (
      <div className="relative pb-10 md:pb-24 px-8 md:px-10 lg:px-14 xl:px-32 w-full dark:bg-black">
        <div className="w-full mx-auto rounded-xl shadow-lg relative bg-white overflow-hidden">
          <div className="pt-8 pb-10 sm:pt-24 sm:pb-40 md:pt-16 md:pb-16 lg:pt-24 lg:pb-24 xl:pt-40 xl:pb-48">
            
            <div className="md:flex justify-between relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
              
              <div className="sm:max-w-lg px-2 md:px-auto">
                <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                  Responsive designs are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                  if you live or die.
                </p>
                <Link href="#">
                  <a className="mt-6 md:mt-8 lg:mt-10 ml-2 md:ml-auto inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-xl font-medium text-white hover:bg-indigo-700">
                    Shop Collection
                  </a>
                </Link>
              </div>

              <div className="sm:max-w-lg mt-8 md:mt-auto px-2 md:px-auto">
                <div className="rounded-lg overflow-hidden">
                  <img src="./images/illustrations/responsive.gif" alt="" className="w-full h-full object-center object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}