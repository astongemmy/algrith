import React, { useState } from "react"
import ReviewCard from "./ReviewCard"

export default function Reviews({ reviews }) {
  const [display, setDisplay] = useState(2)
  return (
    <section className="px-6 lg:px-8 border bg-white rounded-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between my-4">
        <h1 className="text-3xl md:text-4xl font-heading font-medium">Package reviews</h1>
        <span className="">{ reviews.count } reviews</span>
      </div>      
      {reviews.reviews.slice(0, display).map((review) => <ReviewCard review={ review }/>)}      
      <div className="text-center my-4 py-4">
        <button
          onClick={() => display !== 2 ? setDisplay(2) : setDisplay(reviews.reviews.length)}
          className="inline-block w-full
            md:w-auto py-3 px-10
            leading-8 font-heading font-medium
            tracking-tighter text-xl text-white
            bg-green-500 hover:bg-green-600 rounded-xl
          ">
          { display !== 2 ? 'See less' : 'See all' }
        </button>
      </div>
    </section>
  )
}