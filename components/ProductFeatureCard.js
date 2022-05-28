import React from "react"

export default function ProductFeatureCard({ product }) {
  return (
    <div className="w-full px-3 md:px-0 mb-8 lg:mb-0">
      <div className="px-8 md:px-6 py-6 md:py-8 bg-green-500 rounded-3xl">
        <div className="pb-4 mb-4 border-b border-blueGray-300">
          <div className="flex justify-between items-center px-3">
            <h3 className="text-xl text-white font-bold font-heading">Features</h3>
            <p className="text-lg text-white font-bold"> { `${product.currency.symbol} ${product.price}` } </p>
          </div>
        </div>
        <ul className="text-lg text-white mb-6">
          {product.features.map((feature) => {
            return (
              <li key={ Object.keys(feature)[0] } className="flex items-center mb-2">
                <span className="mr-6">
                  <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                  {/* {!feature.available && (<svg width="18" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" stroke="currentColor" stroke-width="2">
                    <path d="M18 12H6" fill="white" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>)} */}
                </span>
                <span> { feature[Object.keys(feature)[0]] } </span>
              </li>
            )
          })}
        </ul>
        <div className="text-center">
          <a className="inline-block px-10 py-4 border border-blueGray-300 hover:border-blueGray-100 rounded-full font-bold text-white" href="#">
            Buy now
          </a>
        </div>
      </div>
    </div>
  )
}