import React from "react"
import ProductRating from "./ProductRating"

export default function ReviewCard({ reviews }) {
  return (
    <section className="md:my-8 lg:my-16 p-2 border -mx-4 bg-green-100 rounded-2xl overflow-hidden">
      <div className="px-4 mx-auto">
        {/* <span className="text-xs text-gray-300 uppercase tracking-wide">What people say</span> */}
        <h1 className="capitalize mb-4 text-3xl md:text-4xl font-heading font-medium">Description</h1>
        <div className="-mx-2 mb-14">
          <div className="px-2 mb-4 xl:mb-0">
            <div className="p-4 bg-white rounded-2xl">
              <div className="w-full md:w-auto px-2 mb-8 md:mb-0">
                <div className="flex flew-wrap justify-between">
                  <a className="block mb-2 text-2xl xl:text-3xl font-heading font-medium hover:underline" href="#">
                    Landing page design
                  </a>
                  <span className="">
                    <ProductRating />
                  </span>
                </div>
                <p className="mb-2 text-lg text-gray-600">
                  This is the description section for product package and this 
                  section will provide a brief description of what the product 
                  package is all about. It should be really brief...just like this.
                  And maybe a little more just to make it exactly this. Seems there 
                  should be more because it seems inconplete, just about this now. 
                  Looks good now! Hello World.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flew-wrap justify-between">
          <h1 className="mb-4 text-3xl md:text-4xl font-heading font-medium">Package reviews</h1>
          <span className="">1,218 reviews</span>
        </div>
        
        <div className="mb-2 shadow-lg rounded-t-3xl rounded-b-xl overflow-hidden">
          <div className="bg-white bg-opacity-40 py-2 lg:py-3 px-8 relative flex flex-wrap justify-between">
            <img className="absolute md:top-3 bg-red-200 lg:top-3 left-4 w-12 h-12 md:w-20 md:h-20 rounded-2xl overflow-hidden" src="/images/reviews/user.png" alt="" />
            <h4 className="pl-12 md:pl-20 text-lg font-heading font-medium">Faustina H. Fawn</h4>
            <span className="pl-12 md:pl-20 lg:pl-auto"><ProductRating /></span>
          </div>
          <div className="overflow-hidden pt-3 md:pt-6 pb-10 lg:pt-10 bg-white">
            <div className="px-4 md:px-6 lg:px-16">
              <div className="flex flex-wrap">
                <p className="w-full lg:w-2/3 mb-3 lg:mb-6 max-w-2xl leading-loose">
                  I haretra neque non mi aliquam, finibus hart bibendum molestie. 
                  Vestibulum suscipit sagittis dignissim mauris.
                </p>
                <p className="w-full lg:w-1/3 lg:text-right md:mb-3 lg:mb-6 text-sm text-gray-300">
                  Added 2 months ago
                </p>
              </div>
            </div>
            <div className="-mb-2 px-4 md:px-5 xl:px-16">
              <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">battery life</span>
                </div>
              </div>
              <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">functionality</span>
                </div>
              </div>
              <div className="inline-flex w-full md:w-auto mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">ease of use</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center my-4 py-8">
          <button className="inline-block w-full md:w-auto h-full py-4 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">See all</button>
        </div>
      </div>
    </section>
  )
}