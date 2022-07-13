import React from "react"
import useRating from '../hooks/useRating'
import ProductRating from "./ProductRating"

export default function ProductDescription({ product, reviews }) {
  const rating = useRating({ reviews })

  return (
    <div className="hidden lg:block my-8 xl:mt-0 xl:w-3/6 pl-2 xl:pl-8">
      <span className="px-3 py-2 bg-green-100 text-sm mb-3 inline-block rounded-lg text-green-400"> Product description </span>
      <h2 className="capitalize mb-2 dark:text-slate-300 text-gray-700 text-3xl font-heading font-semibold">
        { product?.name }
      </h2>
      <span className="inline-block mb-4">
        <ProductRating rating={rating} total={reviews?.length} />
      </span>
      <p className="text-lg dark:text-slate-300 text-gray-600">
        { product?.description }
      </p>
    </div>
  )
}