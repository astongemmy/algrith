import React from "react"
import ProductRating from "./ProductRating"

export default function PackageDescription({ item }) {
  return (
    <section className="border px-6 md:px-6 lg:px-8 md:mb-8 bg-white rounded-xl overflow-hidden">
      <h1 className="capitalize my-5 text-3xl md:text-4xl font-heading font-medium">Description</h1>
      <div className="">
        <div className="bg-white border rounded-2xl p-4 mb-7">
          <div className="w-full md:w-auto md:mb-0">
            <div className="flex flex-col lg:flex-row flex-wrap justify-between">
              <a className="w-full md:w-auto block mb-2 text-2xl xl:text-3xl font-heading font-medium hover:underline" href="#">
                { item.title }
              </a>
              <span className="mb-4 lg:mb-auto">
                <ProductRating />
              </span>
            </div>
            <p className="text-lg text-gray-600">
              { item.description }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}