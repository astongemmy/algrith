import React from "react"
import useRating from '../hooks/useRating'
import ProductRating from "./ProductRating"

export default function PackageDescription({ item }) {
  const { rating, total } = useRating({ reviews: item?.reviews })

  return (
    <section className="dark:border-slate-800 border px-6 md:px-6 lg:px-8 md:mb-8 dark:bg-slate-800 bg-white rounded-xl overflow-hidden">
      <h1 className="capitalize my-5 text-2xl font-heading dark:text-slate-300 text-gray-900 font-medium">Description</h1>
      <div className="w-full md:w-auto mb-6">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between">
          <a className="w-full md:w-auto block mb-2 text-green-500 text-xl font-heading font-medium hover:underline" href="#">
            { item.name }
          </a>
          <span className="mb-4 lg:mb-auto">
            <ProductRating rating={rating} total={total} />
          </span>
        </div>
        <p className="text-lg dark:text-slate-300 text-gray-600">
          { item.description }
        </p>
      </div>
    </section>
  )
}