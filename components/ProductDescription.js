import React from "react"
import ProductRating from "./ProductRating"

export default function ProductDescription({ product }) {
  return (
    <div className="hidden lg:block my-8 xl:mt-0 xl:w-3/6 pl-2 xl:pl-8">
      <h2 className="capitalize mb-2 text-gray-800 text-3xl md:text-4xl font-heading font-medium">
        { product.name } Products
      </h2>
      <span className="inline-block mb-4">
        <ProductRating />
      </span>
      <p className="text-lg text-gray-600">
        { product.description }
      </p>
    </div>
  )
}