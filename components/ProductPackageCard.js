import React from "react"
import ProductRating from "./ProductRating"

export default function ProductPackageCard({ item }) {
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
    <div className="w-full md:w-1/3 px-0 md:px-2 xl:px-10 mb-8 lg:mb-0">
      <div className="bg-white px-6 py-8 md:py-6 md:px-3 lg:p-8 lg:py-12 rounded-2xl border">
        <div className="mb-2">
          <div className="flex flex-wrap justify-between">
            <h1 className="text-2xl text-green-500 font-bold font-heading">
              { item.title }
              <span className="block text-sm md:text-xs lg:text-sm mt-2">
                <ProductRating />
              </span>
            </h1>
            <p className="text-2xl md:text-sm lg:text-2xl text-red-500 font-bold">
              {` ${item.currency.symbol} ${item.price} `}
            </p>
          </div>
        </div>
        <div className="pb-4 mb-4 border-b">
          <div className="flex justify-between items-center">
            <h3 className="text-xl text-black font-bold font-heading">Features</h3>
            <p className="text-lg text-gray-600 font-bold">
              { (formatUnit(item.ordered)) }
              <span className="text-gray-600"> orders</span>
            </p>
          </div>
        </div>
        <ul className="text-lg text-green-500 mb-6">
          {item.features.map((feature) => {
            return (
              <li key={ Object.keys(feature)[0] } className="flex items-center mb-2">
                <span className="mr-6">
                  <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                  </svg>
                  {/* {!feature.available && (<svg width="18" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" stroke="currentColor" stroke-width="2">
                    <path d="M18 12H6" fill="white" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>)} */}
                </span>
                <span className="text-gray-600"> { feature[Object.keys(feature)[0]] } </span>
              </li>
            )
          })}
        </ul>
        <div className="text-center mt-8">
          <a className="text-xl bg-green-500 inline-block px-10 py-4 border border-green-500 hover:border-green-100 rounded-full font-bold text-white" href="#">
            Buy now
          </a>
        </div>
      </div>
    </div>
  )
}