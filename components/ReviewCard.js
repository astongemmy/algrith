import React from "react"
import ProductRating from "./ProductRating"

export default function ReviewCard({ review }) {
  return (
    <div className="mt-8 border border-green-100 rounded-3xl overflow-hidden">
      <div className="bg-green-200 bg-opacity-40 py-2 lg:py-3 px-8 relative flex flex-wrap justify-between">
        <img className="absolute top-3 md:top-3 lg:top-3 left-5 lg:left-8 w-12 h-12 rounded-2xl overflow-hidden" src={ review.avatar } alt={ review.name } />
        <h4 className="pl-12 lg:pl-16 text-lg font-heading text-gray-700 font-medium"> { review.name } </h4>
        <span className="pl-12 lg:pl-16 lg:pl-auto"><ProductRating /></span>
      </div>
      <div className="overflow-hidden pt-3 md:pt-4 lg:pt-6 xl:pt-4 bg-white">
        <div className="px-6 md:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <p className="w-full text-gray-700 lg:w-2/3 mb-3 lg:mb-6 max-w-2xl">
              { review.review }
            </p>
            <p className="w-full lg:w-1/3 lg:text-right mb-3 lg:mb-6 text-sm text-gray-600">
              { review.date }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}