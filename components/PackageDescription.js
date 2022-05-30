import React from "react"
import ProductRating from "./ProductRating"

export default function PackageDescription({ item }) {
  return (
    <section className="my-8 lg:my-16 border px-4 lg:px-0 -mx-4 bg-white rounded-xl overflow-hidden">        
      <h1 className="capitalize my-4 text-3xl md:text-4xl font-heading font-medium lg:px-6">Description</h1>
      <div className="-mx-2">
        <div className="lg:px-2 xl:mb-0">
          <div className="py-4 lg:p-4 bg-white borde rounded-2xl">
            <div className="w-full md:w-auto px-2 md:mb-0">
              <div className="flex flex-col lg:flex-row flex-wrap justify-between">
                <a className="w-full md:w-auto block mb-2 text-2xl xl:text-3xl font-heading font-medium hover:underline" href="#">
                  { item.title }
                </a>
                <span className="mb-4 lg:mb-auto">
                  <ProductRating />
                </span>
              </div>
              <p className="mb-2 text-lg text-gray-600">
                { item.description }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}