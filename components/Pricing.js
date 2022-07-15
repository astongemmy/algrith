import Link from 'next/link'
import React from 'react'

export default function Pricing({ isAvailable, isNotAvailable, isLoading, products, error }) {
  const product = isAvailable ? products.filter(product => product.slug.includes('website'))[0] : {}

  return (
    <section className="w-full pt-12 pb-10 md:pb-24 lg:pb-32 2xl:py-40 bg-gray-800">
      <div className="px-1 md:px-0 lg:px-14 xl:px-28 2xl:w-8/12 2xl:mx-auto">
        <div className="px-4 md:px-auto mb-4 md:mb-14 text-center">
          <h2 className="mb-4 text-4xl lg:text-6xl 2xl:text-7xl text-white font-bold font-heading">
            Choose a package
          </h2>
          <p className="text-xl md:text-2xl dark:text-green-300 text-gray-200">Get started with a suitable package.</p>
        </div>

        <div className="w-full mx-auto">
          {(isAvailable && product?.packages?.length) && (<div className="flex flex-wrap items-center lg:-mx-3 px-4 md:px-10 lg:px-4">
            {product.packages.map((item) => {
              return (
                <div key={ item._id } className="relative w-full md:w-1/3 px-3 mb-8 lg:mb-0 group">
                  <div className={`${item.active ? 'bg-orange-500' : 'bg-navyBlue-500 border'} px-8 md:px-4 lg:px-8 xl:px-12 py-12 md:py-6 lg:py-16 rounded-3xl`}>
                    <div className={`${item.active ? 'border-blue-300' : 'border-gray-400'} pb-8 mb-12 border-b`}>
                      <div className="flex flex-wrap justify-between items-center px-3">
                        <h3 className="text-4xl text-white font-bold font-heading mb-3"> { item.name } </h3>
                        <p className={`${item.active ? 'text-white' : 'text-orange-500'} text-3xl font-bold mb-3`}> { item.currency.symbol + item.price } </p>
                      </div>
                    </div>
                    <ul className="text-lg text-white mb-12">
                      {item.features.map((feature) => {
                        return (
                          <li key={ Object.keys(feature)[0] } className="flex items-center mb-3">
                            <span className="mr-6">
                              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                              </svg>
                            </span>
                            <span> { Object.values(feature)[0] } </span>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="text-center">
                      <Link href={ `/products/${product.slug}/${item.slug}` }>
                        <a className={`
                          ${item.active ? 'border-white hover:border-white text-white' : 'border-orange-500 hover:border-orange-100 text-orange-500'} rounded-full font-bold text-orange-500'}
                          stretched inline-block text-xl
                          px-10 py-4 border rounded-full
                          font-bold
                        `}>
                          Buy Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>)}
          {isNotAvailable && (<div className="flex items-center justify-center">
            No packages available!
          </div>)}
          {isLoading && (<div className="flex items-center justify-center">
            Loading package pricing...
          </div>)}
          {error && (<div className="flex items-center justify-center">
            Could not load package pricing.
          </div>)}
        </div>
      </div>
    </section>
  )
}