import Link from "next/link"
import React from "react"
import ProductRating from "./ProductRating"
import useRating from '../hooks/useRating'

export default function ProductPackageCard({ item, slug }) {
  const { rating, total } = useRating({ reviews: item?.reviews })
  const formatUnit = (unit) => {
    if (unit >= 1000) {
      return Math.round(unit / 1000) + 'k'
    } else if (unit >= 1000000) {
      return Math.round(unit / 1000000) + 'M'
    } else {
      return unit
    }
  }
  const getProperFormat = (text) => {
    if (text !== null) {
      text = text.split('-');
      text = text.map(word => { 
        return word[0].toUpperCase() + word.slice(1);
      }).join(" ");
      return text
    }
  }

  return (
    <div className="w-full md:w-1/3 px-0 md:px-2 xl:px-10 2xl:px-4 mb-8 lg:mb-0">
      <div className="relative dark:bg-slate-800 bg-white px-6 py-8 md:py-6 md:px-3 lg:p-8 lg:py-12 rounded-2xl border dark:border-slate-800">
        <div className="mb-2">
          <div className="flex flex-wrap justify-between">
            <h1 className="text-2xl text-green-500 font-medium font-heading">
              <Link href={`/products/${slug}/${item?.slug}`}>
                <a className="">
                  <span aria-hidden="true" className="absolute inset-0" />
                  { item?.name }
                </a>
              </Link>
              <span className="block mb-6 text-sm md:text-xs lg:text-sm mt-2">
                <ProductRating rating={rating} total={total} />
              </span>
            </h1>
            <p className="text-2xl md:text-sm lg:text-2xl text-red-500 font-bold">
              {` ${item?.currency?.symbol} ${item?.price} `}
            </p>
          </div>
        </div>
        <div className="pb-4 mb-4 border-b text-gray-600 dark:text-slate-400 dark:border-b-slate-700">
          <div className="flex justify-between items-center">
            <h3 className="text-xl dark:text-slate-300 text-black font-medium font-heading">Features</h3>
            <p className="text-lg font-medium">
              { (formatUnit(item?.order_count)) }
              <span> orders</span>
            </p>
          </div>
        </div>
        <ul className="text-lg text-green-500 mb-6">
          {item?.features?.map((feature) => {
            return (
              <li key={ Object.keys(feature)[0] } className="flex items-center mb-2">
                <span className="mr-6">
                  <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                  </svg>
                </span>
                <span className="dark:text-slate-300 text-gray-600"> { Object.values(feature)[0] } </span>
              </li>
            )
          })}
        </ul>
        <div className="text-center mt-8">
          <Link href={`/products/${slug}/${item?.slug}`}>
            <a className="text-xl dark:bg-opacity-50 bg-green-500 inline-block px-10 py-4 border dark:border-opacity-10 border-green-500 hover:border-green-100 rounded-full font-bold text-white">
              Buy now
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}