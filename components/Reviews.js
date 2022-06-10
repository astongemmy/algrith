import React, { useState } from "react"
import ReviewCard from "./ReviewCard"

export default function Reviews({ reviews }) {
  const [display, setDisplay] = useState(2)
  return (
    <section className="px-6 lg:px-8 dark:border-gray-500 border dark:bg-slate-800 bg-white rounded-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between my-4">
        <h1 className="text-2xl font-heading dark:text-gray-200 text-gray-900 font-semibold">Package reviews</h1>
        <span className="dark:text-gray-300 text-gray-600">{ reviews.count } reviews</span>
      </div>      
      {reviews.reviews.slice(0, display).map((review) => <ReviewCard key={ review.name } review={ review }/>)}
      <div className="text-center my-4 py-4">
        <button
          onClick={() => display !== 2 ? setDisplay(2) : setDisplay(reviews.reviews.length)}
          className="inline-block w-full
            md:w-auto py-3 px-10
            leading-8 font-heading font-medium
            tracking-wider text-xl text-white
            bg-green-500 hover:bg-green-600 rounded-xl
          ">
          { display !== 2 ? 'See less' : 'See all' }
        </button>
      </div>
    </section>
  )
}