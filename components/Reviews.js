import React, { useState } from 'react'
import ReviewCard from './ReviewCard'

export default function Reviews({ reviews }) {
  const [display, setDisplay] = useState(6)

  return (
    <section className="px-6 lg:px-8 dark:border-slate-800 border dark:bg-slate-800 bg-white rounded-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between my-4">
        <h1 className="text-2xl font-heading dark:text-slate-300 text-gray-900 font-semibold">Package reviews</h1>
        <span className="dark:text-slate-300 text-gray-600">{ reviews?.length } reviews</span>
      </div>      
      {reviews?.slice(0, display).map((review) => <ReviewCard key={ review._id } review={ review } />)}
      <div className="text-center my-4 py-4">
        <button
          onClick={() => display !== 6 ? setDisplay(6) : setDisplay(reviews.length)}
          className="inline-block w-full
            md:w-auto py-3 px-10
            leading-8 font-heading font-medium
            tracking-wider text-xl text-white
            bg-green-500 hover:bg-green-600 rounded-xl
            dark:bg-opacity-50
          ">
          { display !== 6 ? 'See less' : 'See all' }
        </button>
      </div>
    </section>
  )
}