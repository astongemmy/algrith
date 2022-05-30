import React from "react"
import ReviewCard from "./ReviewCard"

export default function Reviews({ reviews }) {
  return (
    <section className="px-6 lg:px-8 border bg-white rounded-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between my-4">
        <h1 className="text-3xl md:text-4xl font-heading font-medium">Package reviews</h1>
        <span className="">{ reviews.count } reviews</span>
      </div>      
      {reviews.reviews.map((review) => <ReviewCard review={ review }/>)}      
      <div className="text-center my-4 py-4">
        <button className="inline-block w-full md:w-auto h-full py-3 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">See all</button>
      </div>
    </section>
  )
}