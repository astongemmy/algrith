import React from 'react'
import Link from 'next/link'

export default function GetStarted() {
  return (
    <div className="relative pb-10 md:pb-24 px-8 md:px-12 lg:px-20 xl:px-32 w-full dark:bg-black">
      <div className="w-full mx-auto rounded-3xl shadow-lg relative bg-white overflow-hidden">
        <div className="pt-8 pb-10 sm:pt-24 sm:pb-40 md:pt-16 md:pb-16 lg:pt-24 lg:pb-24 xl:pt-12 xl:pb-12">
          
          <div className="md:flex justify-between relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            
            <div className="sm:max-w-2xl px-2 md:px-auto">
              <h1 className="leading-relaxed text-4xl font font-extrabold tracking-tight text-gray-900 sm:leading-relaxed sm:text-6xl">
                Responsive designs are finally here
              </h1>
              <p className="mt-4 text-xl leading-relaxed text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
              <Link href="/products/websites">
                <a className="mt-6 md:mt-8 lg:mt-10 md:ml-auto inline-block text-center bg-indigo-600 border border-transparent rounded-md py-4 px-8 text-2xl font-medium text-white hover:bg-indigo-700">
                  Get Started 
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </a>
              </Link>
            </div>

            <div className="sm:max-w-2xl mt-8 md:mt-auto px-2 md:px-auto">
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